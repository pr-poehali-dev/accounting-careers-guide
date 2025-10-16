import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { quizQuestions } from '@/data/quiz';
import { specializations, educationPaths } from '@/data/specializations';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedSpec, setRecommendedSpec] = useState<number | null>(null);

  const handleQuizAnswer = (specs: number[]) => {
    setQuizAnswers([...quizAnswers, ...specs]);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts = quizAnswers.concat(specs).reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);
      const topSpec = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setRecommendedSpec(Number(topSpec));
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setShowResult(false);
    setRecommendedSpec(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Calculator" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">Карьера в бухгалтерии</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/specializations" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Специализации
              </Link>
              <Link to="/salaries" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Зарплаты
              </Link>
              <Link to="/education" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Образование
              </Link>
              <Link to="/quiz" className="text-sm font-medium text-primary transition-colors">
                Профориентация
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-3xl">
          {!showResult ? (
            <>
              <div className="text-center mb-12">
                <Badge className="mb-4" variant="outline">15 вопросов</Badge>
                <h1 className="text-5xl font-bold mb-4 text-foreground">Профориентационный тест</h1>
                <p className="text-xl text-muted-foreground">
                  Ответьте на вопросы, чтобы узнать, какая специализация в бухгалтерии подходит именно вам
                </p>
              </div>

              <Card className="shadow-xl">
                <CardHeader>
                  <div className="flex justify-between items-center mb-3">
                    <CardTitle className="text-2xl">
                      Вопрос {quizStep + 1} из {quizQuestions.length}
                    </CardTitle>
                    <Badge className="text-base px-3 py-1">
                      {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
                    </Badge>
                  </div>
                  <Progress value={((quizStep + 1) / quizQuestions.length) * 100} className="mb-4 h-2" />
                  <CardDescription className="text-lg font-medium text-foreground mt-4">
                    {quizQuestions[quizStep].question}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-4 px-5 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-[1.02] text-base"
                      onClick={() => handleQuizAnswer(option.spec)}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-current flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-current opacity-0 group-hover:opacity-100"></div>
                        </div>
                        <span className="flex-1">{option.text}</span>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {quizStep > 0 && (
                <div className="mt-6 text-center">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (quizStep > 0) {
                        setQuizStep(quizStep - 1);
                        setQuizAnswers(quizAnswers.slice(0, -1));
                      }
                    }}
                  >
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Предыдущий вопрос
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Icon name="CheckCircle2" size={48} className="text-primary" />
                </div>
                <h1 className="text-4xl font-bold mb-2 text-foreground">Ваш результат готов!</h1>
                <p className="text-muted-foreground text-lg">На основе анализа 15 ваших ответов</p>
              </div>

              <Card className="border-2 border-primary shadow-2xl">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <Icon name={specializations[recommendedSpec!].icon as any} size={40} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3">Рекомендуем</Badge>
                      <CardTitle className="text-3xl mb-2">{specializations[recommendedSpec!].title}</CardTitle>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {specializations[recommendedSpec!].salary}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <p className="text-lg text-muted-foreground mb-4">
                      {specializations[recommendedSpec!].description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <p className="font-semibold">Где можно работать</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {specializations[recommendedSpec!].places}
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="Award" size={20} className="text-primary" />
                        <p className="font-semibold">Необходимые навыки</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {specializations[recommendedSpec!].skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Icon name="GraduationCap" size={22} className="text-accent" />
                      Рекомендации по обучению
                    </h4>
                    <div className="space-y-3">
                      {educationPaths.slice(1, 4).map((path, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-background rounded-lg border hover:border-accent transition-colors">
                          <div>
                            <p className="font-medium mb-1">{path.level}</p>
                            <p className="text-sm text-muted-foreground">
                              {path.duration} • {path.institutions}
                            </p>
                          </div>
                          <Badge variant="outline" className="ml-4">{path.starting}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                    <div className="flex gap-3">
                      <Icon name="Lightbulb" size={28} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-lg mb-3">Ваши следующие шаги:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span>Изучите актуальные вакансии по этой специализации на hh.ru</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span>Запишитесь на курсы по 1С:Бухгалтерия и основам учета</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span>Получите практический опыт через стажировку</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            <span>Рассмотрите профессиональную сертификацию для карьерного роста</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={resetQuiz} variant="outline" size="lg" className="flex-1">
                  <Icon name="RotateCcw" size={20} className="mr-2" />
                  Пройти тест снова
                </Button>
                <Link to="/specializations" className="flex-1">
                  <Button size="lg" className="w-full">
                    <Icon name="Search" size={20} className="mr-2" />
                    Все специализации
                  </Button>
                </Link>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    💡 Результат основан на ваших ответах. Рекомендуем также изучить другие специализации и поговорить с действующими специалистами.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
