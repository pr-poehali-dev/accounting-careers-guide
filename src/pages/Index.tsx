import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { specializations } from '@/data/specializations';
import { Link } from 'react-router-dom';

const Index = () => {
  const topSpecs = specializations.slice(0, 6);

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
              <Link to="/" className="text-sm font-medium text-primary transition-colors">
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
              <Link to="/quiz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Профориентация
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4 animate-fade-in" variant="outline">
            Профориентация в бухгалтерии
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up text-foreground">
            Найдите свой путь в бухгалтерии
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            15 специализаций, актуальные зарплаты, пути развития. Узнайте, какое направление подходит именно вам.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up flex-wrap">
            <Link to="/quiz">
              <Button size="lg">
                <Icon name="Compass" size={20} className="mr-2" />
                Пройти тест
              </Button>
            </Link>
            <Link to="/specializations">
              <Button size="lg" variant="outline">
                Изучить специализации
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Популярные специализации</h2>
            <p className="text-muted-foreground">
              Самые востребованные направления в бухгалтерии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSpecs.map((spec, idx) => (
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
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/specializations">
              <Button variant="outline" size="lg">
                Все 15 специализаций
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Почему бухгалтерия?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                  <Icon name="TrendingUp" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Стабильность</CardTitle>
                <CardDescription>
                  Профессия всегда востребована во всех отраслях экономики
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-3">
                  <Icon name="DollarSign" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Достойная зарплата</CardTitle>
                <CardDescription>
                  От 50,000 ₽ для начинающих до 400,000+ ₽ для топ-специалистов
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                  <Icon name="Briefcase" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Карьерный рост</CardTitle>
                <CardDescription>
                  Четкая карьерная лестница от младшего бухгалтера до CFO
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-3">
                  <Icon name="Globe" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Гибкость</CardTitle>
                <CardDescription>
                  Возможность работы удаленно, на фрилансе или в офисе
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <Icon name="Compass" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-3xl mb-3">Не знаете, с чего начать?</CardTitle>
              <CardDescription className="text-lg">
                Пройдите бесплатный профориентационный тест из 15 вопросов и получите персональную рекомендацию
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Пройти тест за 3 минуты
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                Более 1000 человек уже нашли свою специализацию
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Calculator" size={24} className="text-primary" />
              <span className="text-lg font-bold">Карьера в бухгалтерии</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/specializations" className="hover:text-primary transition-colors">
                Специализации
              </Link>
              <Link to="/salaries" className="hover:text-primary transition-colors">
                Зарплаты
              </Link>
              <Link to="/education" className="hover:text-primary transition-colors">
                Образование
              </Link>
              <Link to="/quiz" className="hover:text-primary transition-colors">
                Тест
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>Профориентационный портал для выбора специализации в бухгалтерии</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
