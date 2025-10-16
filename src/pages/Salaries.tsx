import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { salaryData, specializations } from '@/data/specializations';
import { Link } from 'react-router-dom';

const Salaries = () => {
  const sortedByMaxSalary = [...specializations].sort((a, b) => b.salaryMax - a.salaryMax);
  const topPaying = sortedByMaxSalary.slice(0, 5);
  const entryLevel = [...specializations].filter(s => s.salaryMin < 70000).sort((a, b) => a.salaryMin - b.salaryMin);

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
              <Link to="/salaries" className="text-sm font-medium text-primary transition-colors">
                Зарплаты
              </Link>
              <Link to="/education" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
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
            <Badge className="mb-4" variant="outline">Актуальная статистика 2025</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Уровень зарплат в бухгалтерии</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные данные по зарплатам бухгалтеров в России
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                  Распределение зарплат
                </CardTitle>
                <CardDescription>Процентное распределение по диапазонам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {salaryData.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="font-semibold">{item.range}</span>
                        <span className="text-muted-foreground ml-2">• {item.label}</span>
                      </div>
                      <Badge variant="secondary">{item.count}%</Badge>
                    </div>
                    <Progress value={item.count} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                  Самые высокооплачиваемые
                </CardTitle>
                <CardDescription>Топ-5 специализаций по зарплате</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPaying.map((spec, idx) => (
                  <div key={spec.id} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{spec.title}</p>
                        <div className="flex gap-2 mt-0.5">
                          <Badge variant="outline" className="text-xs">
                            {spec.difficulty === 'низкая' && '🟢'}
                            {spec.difficulty === 'средняя' && '🟡'}
                            {spec.difficulty === 'высокая' && '🔴'}
                          </Badge>
                          <Badge variant={spec.demand === 'высокий' ? 'default' : 'secondary'} className="text-xs">
                            {spec.demand === 'высокий' ? '⭐' : ''}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                      {spec.salary}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Rocket" size={24} className="text-primary" />
                  Для начинающих
                </CardTitle>
                <CardDescription>Специализации с доступным входом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {entryLevel.map((spec) => (
                  <div key={spec.id} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon name={spec.icon as any} size={20} className="text-primary" />
                      <div>
                        <p className="font-medium text-sm">{spec.title}</p>
                        <p className="text-xs text-muted-foreground">{spec.education.split('+')[0].trim()}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{spec.salary}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                  Факторы влияющие на зарплату
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="GraduationCap" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Образование</p>
                    <p className="text-sm text-muted-foreground">
                      Магистратура и сертификация увеличивают зарплату на 30-50%
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Регион</p>
                    <p className="text-sm text-muted-foreground">
                      Москва и Санкт-Петербург: +40-60% к средней зарплате по РФ
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Briefcase" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Опыт</p>
                    <p className="text-sm text-muted-foreground">
                      Каждые 2-3 года опыта добавляют 15-25% к зарплате
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Building2" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Размер компании</p>
                    <p className="text-sm text-muted-foreground">
                      Крупные корпорации платят на 20-40% больше среднего бизнеса
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={24} />
                Карьерный путь и рост зарплаты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <Badge className="mb-2">0-2 года</Badge>
                  <p className="font-semibold">Младший бухгалтер</p>
                  <p className="text-sm text-muted-foreground">50,000 - 80,000 ₽</p>
                </div>
                <div className="relative pl-8 pb-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <Badge className="mb-2">2-5 лет</Badge>
                  <p className="font-semibold">Бухгалтер</p>
                  <p className="text-sm text-muted-foreground">80,000 - 120,000 ₽</p>
                </div>
                <div className="relative pl-8 pb-6 border-l-2 border-primary/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <Badge className="mb-2">5-8 лет</Badge>
                  <p className="font-semibold">Старший бухгалтер</p>
                  <p className="text-sm text-muted-foreground">120,000 - 180,000 ₽</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <Badge className="mb-2 bg-accent">8+ лет</Badge>
                  <p className="font-semibold">Главный бухгалтер / CFO</p>
                  <p className="text-sm text-muted-foreground">180,000 - 400,000+ ₽</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Salaries;