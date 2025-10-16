import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { specializations } from '@/data/specializations';
import { Link } from 'react-router-dom';

const Specializations = () => {
  const [filter, setFilter] = useState('all');

  const categories = {
    all: 'Все специализации',
    corporate: 'Корпоративный учет',
    consulting: 'Консалтинг',
    management: 'Управление',
    audit: 'Аудит и контроль',
    operational: 'Операционный учет',
  };

  const filteredSpecs = filter === 'all' 
    ? specializations 
    : specializations.filter(s => s.category === filter);

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
              <Link to="/specializations" className="text-sm font-medium text-primary transition-colors">
                Специализации
              </Link>
              <Link to="/salaries" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
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
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">15 специализаций</Badge>
            <h1 className="text-5xl font-bold mb-4 text-foreground">Специализации в бухгалтерии</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите направление в зависимости от ваших интересов и карьерных целей
            </p>
          </div>

          <Tabs value={filter} onValueChange={setFilter} className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
              {Object.entries(categories).map(([key, label]) => (
                <TabsTrigger key={key} value={key} className="flex-shrink-0">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecs.map((spec) => (
              <Card key={spec.id} className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={spec.icon as any} size={28} className="text-primary" />
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <Badge variant="secondary" className="text-xs">{spec.salary}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {spec.difficulty === 'низкая' && '🟢 Легко'}
                        {spec.difficulty === 'средняя' && '🟡 Средне'}
                        {spec.difficulty === 'высокая' && '🔴 Сложно'}
                      </Badge>
                      <Badge variant={spec.demand === 'высокий' ? 'default' : 'secondary'} className="text-xs">
                        {spec.demand === 'высокий' && '⭐ Востребовано'}
                        {spec.demand === 'средний' && 'Средний спрос'}
                        {spec.demand === 'низкий' && 'Низкий спрос'}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{spec.title}</CardTitle>
                  <CardDescription className="text-base">{spec.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2 text-muted-foreground flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        Места работы:
                      </p>
                      <p className="text-sm">{spec.places}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2 text-muted-foreground flex items-center gap-2">
                        <Icon name="Award" size={16} />
                        Ключевые навыки:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {spec.skills.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {spec.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{spec.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2 text-muted-foreground flex items-center gap-2">
                        <Icon name="GraduationCap" size={16} />
                        Образование:
                      </p>
                      <p className="text-sm">{spec.education}</p>
                    </div>
                    <div className="pt-3 border-t">
                      <details className="cursor-pointer group/details">
                        <summary className="text-sm font-medium text-primary hover:underline list-none flex items-center gap-1">
                          <Icon name="ChevronRight" size={16} className="group-open/details:rotate-90 transition-transform" />
                          Плюсы и минусы
                        </summary>
                        <div className="mt-3 space-y-3 pl-5">
                          <div>
                            <p className="text-xs font-semibold text-green-600 mb-1.5">Плюсы:</p>
                            <ul className="text-xs space-y-1">
                              {spec.pros.map((pro, idx) => (
                                <li key={idx} className="flex items-start gap-1">
                                  <span className="text-green-600 mt-0.5">✓</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-600 mb-1.5">Минусы:</p>
                            <ul className="text-xs space-y-1">
                              {spec.cons.map((con, idx) => (
                                <li key={idx} className="flex items-start gap-1">
                                  <span className="text-red-600 mt-0.5">✗</span>
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Icon name="HelpCircle" size={24} />
                  Не знаете, что выбрать?
                </CardTitle>
                <CardDescription className="text-base">
                  Пройдите профориентационный тест и узнайте, какая специализация подходит именно вам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/quiz">
                  <Button size="lg" className="w-full sm:w-auto">
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

export default Specializations;