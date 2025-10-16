import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { educationPaths } from '@/data/specializations';
import { Link } from 'react-router-dom';

const Education = () => {
  const universities = [
    'МГУ им. М.В. Ломоносова',
    'РЭУ им. Г.В. Плеханова',
    'Финансовый университет при Правительстве РФ',
    'ВШЭ (Высшая школа экономики)',
    'РАНХиГС',
    'МГИМО',
  ];

  const certifications = [
    {
      name: 'Профессиональный бухгалтер России (ИПБ)',
      organization: 'Институт профессиональных бухгалтеров России',
      duration: '6-12 месяцев',
      level: 'Российский',
    },
    {
      name: 'ACCA (Association of Chartered Certified Accountants)',
      organization: 'Международная ассоциация',
      duration: '2-3 года',
      level: 'Международный',
    },
    {
      name: 'CPA (Certified Public Accountant)',
      organization: 'Американский институт',
      duration: '1-2 года',
      level: 'Международный',
    },
    {
      name: 'CMA (Certified Management Accountant)',
      organization: 'IMA (США)',
      duration: '1-2 года',
      level: 'Международный',
    },
  ];

  const skills = [
    { name: '1С Бухгалтерия', icon: 'Code', level: 'Обязательно' },
    { name: 'Excel (продвинутый)', icon: 'Table', level: 'Обязательно' },
    { name: 'Налоговое законодательство', icon: 'BookOpen', level: 'Обязательно' },
    { name: 'МСФО/IFRS', icon: 'Globe', level: 'Желательно' },
    { name: 'SAP/Oracle', icon: 'Database', level: 'Желательно' },
    { name: 'Английский язык', icon: 'Languages', level: 'Желательно' },
  ];

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
              <Link to="/education" className="text-sm font-medium text-primary transition-colors">
                Образование
              </Link>
              <Link to="/quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Профориентация
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Пути развития</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Образование в бухгалтерии</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите образовательный путь в зависимости от ваших целей и возможностей
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {educationPaths.map((path, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="GraduationCap" size={28} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{path.level}</CardTitle>
                        <Badge variant="outline">{path.duration}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Где учиться:</span>
                    <span className="font-medium text-sm text-right">{path.institutions}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="text-sm font-medium">Стартовая зарплата:</span>
                    <Badge className="bg-accent text-white">{path.starting}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="School" size={24} className="text-primary" />
                  Топ вузов России
                </CardTitle>
                <CardDescription>Ведущие университеты для обучения бухгалтеров</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {universities.map((uni, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {idx + 1}
                      </div>
                      <span className="font-medium">{uni}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-accent" />
                  Профессиональные сертификации
                </CardTitle>
                <CardDescription>Повысьте свою квалификацию и зарплату</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 border rounded-lg hover:border-accent transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <Badge variant={cert.level === 'Международный' ? 'default' : 'secondary'} className="ml-2">
                        {cert.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.organization}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{cert.duration}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Zap" size={24} className="text-primary" />
                Ключевые навыки бухгалтера
              </CardTitle>
              <CardDescription>Что нужно изучить для успешной карьеры</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="p-4 border rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name={skill.icon as any} size={20} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                    </div>
                    <Badge variant={skill.level === 'Обязательно' ? 'default' : 'outline'} className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Route" size={24} />
                Рекомендуемый путь развития
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 my-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="font-semibold mb-2">Получите базовое образование</h4>
                    <p className="text-sm text-muted-foreground">
                      Среднее профессиональное или высшее образование по специальности «Бухгалтерский учет»
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 my-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="font-semibold mb-2">Освойте 1С и Excel</h4>
                    <p className="text-sm text-muted-foreground">
                      Пройдите курсы по 1С:Бухгалтерия и продвинутому Excel - это минимальные требования работодателей
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="w-0.5 h-full bg-primary/30 my-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="font-semibold mb-2">Получите опыт</h4>
                    <p className="text-sm text-muted-foreground">
                      Начните со стажировки или позиции младшего бухгалтера, накапливайте практический опыт
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">Развивайтесь дальше</h4>
                    <p className="text-sm text-muted-foreground">
                      Получите профессиональную сертификацию, изучите МСФО, освойте английский язык для роста до топовых позиций
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Готовы начать?</h3>
                <p className="text-muted-foreground mb-4">
                  Пройдите профориентационный тест и узнайте, какое образование нужно для вашей специализации
                </p>
                <Link to="/quiz">
                  <Button size="lg">
                    <Icon name="Compass" size={20} className="mr-2" />
                    Пройти тест
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
