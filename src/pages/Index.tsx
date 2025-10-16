import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedSpec, setRecommendedSpec] = useState<number | null>(null);

  const specializations = [
    {
      title: 'Финансовый бухгалтер',
      salary: '80,000 - 150,000 ₽',
      icon: 'TrendingUp',
      description: 'Ведение финансовой отчетности компании, анализ финансовых показателей',
      places: 'Крупные корпорации, банки, финансовые компании',
      skills: ['МСФО', 'Финанализ', '1С', 'Excel'],
    },
    {
      title: 'Налоговый консультант',
      salary: '90,000 - 180,000 ₽',
      icon: 'FileText',
      description: 'Налоговое планирование, оптимизация налогообложения, консультирование',
      places: 'Консалтинговые компании, налоговые службы',
      skills: ['НК РФ', 'Налоговое право', 'Консалтинг', 'Аналитика'],
    },
    {
      title: 'Управленческий учет',
      salary: '100,000 - 200,000 ₽',
      icon: 'BarChart3',
      description: 'Анализ затрат, бюджетирование, управленческая отчетность',
      places: 'Производственные компании, холдинги',
      skills: ['Бюджетирование', 'Контроллинг', 'BI-системы', 'Управление'],
    },
    {
      title: 'Аудитор',
      salary: '70,000 - 160,000 ₽',
      icon: 'Search',
      description: 'Проверка финансовой отчетности, выявление нарушений, консультации',
      places: 'Аудиторские компании, Большая четверка',
      skills: ['Аудит', 'МСФО', 'Анализ', 'Право'],
    },
    {
      title: 'Бухгалтер по расчету зарплаты',
      salary: '60,000 - 120,000 ₽',
      icon: 'Users',
      description: 'Расчет заработной платы, налогов, ведение кадрового учета',
      places: 'Компании всех размеров, кадровые агентства',
      skills: ['Расчет зарплаты', 'Кадровый учет', 'НДФЛ', 'Страховые взносы'],
    },
    {
      title: 'Главный бухгалтер',
      salary: '120,000 - 300,000 ₽',
      icon: 'Briefcase',
      description: 'Полная ответственность за бухучет компании, управление отделом',
      places: 'Средний и крупный бизнес',
      skills: ['Все виды учета', 'Руководство', 'Стратегия', 'Право'],
    },
  ];

  const educationPaths = [
    {
      level: 'Среднее профессиональное',
      duration: '2-3 года',
      institutions: 'Колледжи, техникумы',
      starting: '50,000 - 70,000 ₽',
    },
    {
      level: 'Высшее образование (бакалавриат)',
      duration: '4 года',
      institutions: 'Университеты, экономические вузы',
      starting: '60,000 - 90,000 ₽',
    },
    {
      level: 'Магистратура',
      duration: '2 года',
      institutions: 'Ведущие экономические вузы',
      starting: '80,000 - 120,000 ₽',
    },
    {
      level: 'Профессиональная сертификация',
      duration: '6-12 месяцев',
      institutions: 'ИПБ России, ACCA, CPA',
      starting: '100,000 - 150,000 ₽',
    },
  ];

  const quizQuestions = [
    {
      question: 'Что вам интереснее?',
      options: [
        { text: 'Работа с цифрами и отчетами', spec: [0, 2] },
        { text: 'Консультирование и общение', spec: [1, 3] },
        { text: 'Управление и стратегия', spec: [2, 5] },
        { text: 'Работа с персоналом', spec: [4] },
      ],
    },
    {
      question: 'Какой темп работы вам ближе?',
      options: [
        { text: 'Размеренный, планомерный', spec: [0, 4] },
        { text: 'Интенсивный, с дедлайнами', spec: [3, 5] },
        { text: 'Проектный, меняющийся', spec: [1, 2] },
      ],
    },
    {
      question: 'Где вы видите себя?',
      options: [
        { text: 'В крупной корпорации', spec: [0, 3] },
        { text: 'В консалтинге', spec: [1, 3] },
        { text: 'В производственной компании', spec: [2, 5] },
        { text: 'В компании любого размера', spec: [4] },
      ],
    },
    {
      question: 'Как вы относитесь к рутинным задачам?',
      options: [
        { text: 'Люблю систематическую работу', spec: [0, 4] },
        { text: 'Предпочитаю разнообразие', spec: [1, 3] },
        { text: 'Ищу баланс между рутиной и новизной', spec: [2] },
        { text: 'Хочу решать стратегические задачи', spec: [5] },
      ],
    },
    {
      question: 'Какой уровень ответственности вам комфортен?',
      options: [
        { text: 'Отвечаю за свою работу', spec: [0, 4] },
        { text: 'Готов к высокой ответственности', spec: [3, 5] },
        { text: 'Консультирую, но не принимаю финальные решения', spec: [1] },
        { text: 'Готов отвечать за результаты компании', spec: [2, 5] },
      ],
    },
    {
      question: 'Что для вас важнее в работе?',
      options: [
        { text: 'Стабильность и предсказуемость', spec: [0, 4] },
        { text: 'Возможность развития и роста', spec: [2, 5] },
        { text: 'Общение с людьми', spec: [1, 4] },
        { text: 'Престиж и признание', spec: [3, 5] },
      ],
    },
    {
      question: 'Как вы предпочитаете работать?',
      options: [
        { text: 'Самостоятельно, сосредоточенно', spec: [0, 2] },
        { text: 'В команде, с обменом идеями', spec: [1, 4] },
        { text: 'Руковожу процессом', spec: [5] },
        { text: 'Совмещаю индивидуальную и командную работу', spec: [3] },
      ],
    },
    {
      question: 'Какое образование у вас есть или планируется?',
      options: [
        { text: 'Среднее профессиональное', spec: [4, 0] },
        { text: 'Высшее (бакалавриат)', spec: [0, 2, 4] },
        { text: 'Магистратура или планирую', spec: [1, 2, 5] },
        { text: 'Есть/планирую сертификацию', spec: [1, 3, 5] },
      ],
    },
  ];

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

  const salaryData = [
    { range: '50-70k', count: 15 },
    { range: '70-100k', count: 30 },
    { range: '100-150k', count: 35 },
    { range: '150-200k', count: 15 },
    { range: '200k+', count: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Calculator" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">Карьера в бухгалтерии</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Специализации', 'Зарплаты', 'Образование', 'Профориентация'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4 animate-fade-in" variant="outline">
            Профориентация
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Найдите свой путь в бухгалтерии
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Узнайте о специализациях, зарплатах и возможностях карьерного роста. Выберите направление, которое подходит именно вам.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button size="lg" onClick={() => setActiveSection('профориентация')}>
              <Icon name="Compass" size={20} className="mr-2" />
              Пройти тест
            </Button>
            <Button size="lg" variant="outline" onClick={() => setActiveSection('специализации')}>
              Изучить специализации
            </Button>
          </div>
        </div>
      </section>

      <section id="specializations" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Специализации в бухгалтерии</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите направление в зависимости от ваших интересов и целей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg mb-3">
                      <Icon name={spec.icon as any} size={24} className="text-primary" />
                    </div>
                    <Badge variant="secondary">{spec.salary}</Badge>
                  </div>
                  <CardTitle className="text-xl">{spec.title}</CardTitle>
                  <CardDescription>{spec.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1 text-muted-foreground">Места работы:</p>
                      <p className="text-sm">{spec.places}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2 text-muted-foreground">Ключевые навыки:</p>
                      <div className="flex flex-wrap gap-2">
                        {spec.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="salaries" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Уровень зарплат</h2>
          <p className="text-center text-muted-foreground mb-12">
            Распределение зарплат в сфере бухгалтерии (данные по России)
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Статистика зарплат</CardTitle>
              <CardDescription>Процентное распределение по диапазонам (в месяц)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {salaryData.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.range}</span>
                    <span className="text-muted-foreground">{item.count}%</span>
                  </div>
                  <Progress value={item.count} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Образование</h2>
          <p className="text-center text-muted-foreground mb-12">
            Пути получения образования и стартовые зарплаты
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {educationPaths.map((path, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon name="GraduationCap" size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-lg">{path.level}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Длительность:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Где учиться:</span>
                    <span className="font-medium text-right">{path.institutions}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="text-muted-foreground">Стартовая зарплата:</span>
                    <span className="font-bold text-accent">{path.starting}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Профориентационный тест</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответьте на 8 вопросов, чтобы узнать, какая специализация вам подходит
          </p>
          
          {!showResult ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle>Вопрос {quizStep + 1} из {quizQuestions.length}</CardTitle>
                  <Badge>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</Badge>
                </div>
                <Progress value={((quizStep + 1) / quizQuestions.length) * 100} className="mb-4" />
                <CardDescription className="text-lg font-medium text-foreground">
                  {quizQuestions[quizStep].question}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quizQuestions[quizStep].options.map((option, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handleQuizAnswer(option.spec)}
                  >
                    <Icon name="Circle" size={16} className="mr-3 flex-shrink-0" />
                    {option.text}
                  </Button>
                ))}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="CheckCircle2" size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Ваш результат готов!</CardTitle>
                      <CardDescription>На основе ваших ответов</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {recommendedSpec !== null && (
                    <>
                      <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{specializations[recommendedSpec].title}</h3>
                            <Badge variant="secondary" className="text-base">
                              {specializations[recommendedSpec].salary}
                            </Badge>
                          </div>
                          <Icon name={specializations[recommendedSpec].icon as any} size={48} className="text-primary" />
                        </div>
                        <p className="text-muted-foreground mb-4">{specializations[recommendedSpec].description}</p>
                        
                        <div className="space-y-3 mt-4">
                          <div>
                            <p className="text-sm font-medium mb-1 text-muted-foreground">Где можно работать:</p>
                            <p className="text-sm font-medium">{specializations[recommendedSpec].places}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-2 text-muted-foreground">Необходимые навыки:</p>
                            <div className="flex flex-wrap gap-2">
                              {specializations[recommendedSpec].skills.map((skill, i) => (
                                <Badge key={i} variant="outline">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Рекомендации по обучению:</h4>
                        <div className="grid gap-3">
                          {educationPaths.slice(1, 4).map((path, idx) => (
                            <div key={idx} className="p-4 bg-card rounded-lg border flex justify-between items-center">
                              <div>
                                <p className="font-medium">{path.level}</p>
                                <p className="text-sm text-muted-foreground">{path.duration} • {path.institutions}</p>
                              </div>
                              <Badge variant="outline">{path.starting}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <div className="flex gap-3">
                          <Icon name="Lightbulb" size={24} className="text-accent flex-shrink-0" />
                          <div>
                            <p className="font-medium mb-1">Следующие шаги:</p>
                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                              <li>Изучите требования к специалистам в вакансиях</li>
                              <li>Начните с курсов по основам бухгалтерского учета</li>
                              <li>Получите практический опыт через стажировки</li>
                              <li>Рассмотрите профессиональную сертификацию</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex gap-3">
                    <Button onClick={resetQuiz} variant="outline" className="flex-1">
                      <Icon name="RotateCcw" size={18} className="mr-2" />
                      Пройти снова
                    </Button>
                    <Button className="flex-1" onClick={() => setActiveSection('специализации')}>
                      <Icon name="Search" size={18} className="mr-2" />
                      Все специализации
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-card">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Calculator" size={24} className="text-primary" />
            <span className="text-lg font-bold">Карьера в бухгалтерии</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Профориентационный портал для выбора специализации в бухгалтерии
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;