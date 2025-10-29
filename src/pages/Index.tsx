import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'UserCheck',
      title: 'Банкротство физических лиц',
      description: 'Комплексное юридическое сопровождение процедуры банкротства граждан. Наши адвокатские услуги включают полное списание долгов по кредитам, микрозаймам, ЖКХ и другим обязательствам. Правовая защита на всех этапах: от подачи заявления до завершения процедуры. Юридические консультации по правовым вопросам, анализ документов, представительство в суде. Защита прав должника и сохранение имущества в рамках закона.',
    },
    {
      icon: 'Briefcase',
      title: 'Банкротство юридических лиц',
      description: 'Профессиональное юридическое сопровождение процедуры банкротства организаций всех форм собственности. Адвокатские услуги включают правовую помощь в реструктуризации долгов, ликвидации компании, защите интересов кредиторов и должников. Услуги юриста по составлению документов, правовые консультации на каждом этапе, представительство в арбитражном суде. Разрешение споров с налоговыми органами и контрагентами.',
    },
    {
      icon: 'FileText',
      title: 'Правовые консультации',
      description: 'Профессиональные юридические консультации по всем правовым вопросам банкротства и защиты прав. Услуги юриста включают детальный анализ финансовой ситуации, оценку перспектив банкротства, разработку индивидуальной стратегии. Юридическая помощь в составлении документов, претензий, исковых заявлений. Правовое сопровождение сделок, консультации по вопросам задолженности и взаимодействия с кредиторами.',
    },
    {
      icon: 'Shield',
      title: 'Защита прав в суде',
      description: 'Комплексная правовая защита и представительство интересов в судах всех инстанций. Адвокатские услуги по ведению дел в арбитражных и гражданских судах. Юридическое сопровождение сделок любой сложности. Защита прав при взаимодействии с коллекторами, приставами и кредиторами. Правовая помощь в оспаривании незаконных действий, обжаловании решений. Услуги юриста по составлению процессуальных документов.',
    },
    {
      icon: 'Stamp',
      title: 'Регистрация бизнеса',
      description: 'Полная юридическая помощь в регистрации ООО, ИП и других форм бизнеса. Услуги юриста включают подготовку учредительных документов, правовые консультации по выбору системы налогообложения, составление уставов и договоров. Юридическое сопровождение на всех этапах регистрации в налоговой инспекции и фондах. Правовая защита при внесении изменений в ЕГРЮЛ/ЕГРИП. Адвокатские услуги по сопровождению сделок с долями.',
    },
    {
      icon: 'Scale',
      title: 'Разрешение споров',
      description: 'Профессиональные услуги юриста по разрешению гражданских и арбитражных правовых споров. Юридическая помощь в претензионной работе, медиации и судебных разбирательствах. Защита прав в спорах с контрагентами, налоговыми органами, государственными структурами. Правовые консультации по стратегии ведения дела. Адвокатские услуги включают составление процессуальных документов, представительство в судах, юридическое сопровождение исполнительного производства.',
    },
  ];

  const advantages = [
    { 
      icon: 'Award', 
      title: 'Опыт работы 10+ лет', 
      description: 'Более 500 успешно завершенных процедур банкротства. Наши юристы имеют высшую квалификацию и постоянно повышают профессиональный уровень' 
    },
    { 
      icon: 'Clock', 
      title: 'Быстрый старт работы', 
      description: 'Первая юридическая консультация бесплатно. Начинаем правовое сопровождение в день обращения. Оперативное составление документов' 
    },
    { 
      icon: 'CheckCircle2', 
      title: 'Гарантия результата', 
      description: 'Работаем на результат по договору. Полное юридическое сопровождение до завершения дела. Защита прав клиента на всех этапах' 
    },
    { 
      icon: 'Wallet', 
      title: 'Прозрачное ценообразование', 
      description: 'Адвокатские услуги по доступным ценам. Рассрочка платежа без переплат. Индивидуальные условия юридической помощи для каждого клиента' 
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-white"></div>
        <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-blue-600"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-red-600"></div>
      </div>
      <div className="relative z-10">
      <header className="bg-card border-b border-border shadow-lg py-4 px-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/b5501066-ba01-4ce1-bc5c-8b702e72fd95/files/64574394-9900-4d0d-af54-f5c067729c38.jpg" 
              alt="Весы правосудия" 
              className="w-12 h-12 object-contain brightness-110"
            />
            <div>
              <h2 className="text-xl font-bold text-primary">Юридические услуги</h2>
              <p className="text-sm text-muted-foreground">Профессиональная правовая помощь</p>
            </div>
          </div>
          <img 
            src="https://cdn.poehali.dev/projects/b5501066-ba01-4ce1-bc5c-8b702e72fd95/files/2f405dec-e958-45a6-9046-195a322db31d.jpg" 
            alt="Герб России" 
            className="w-16 h-16 object-contain hidden sm:block brightness-110"
          />
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Юридические услуги по банкротству
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Профессиональная правовая помощь, адвокатские услуги и юридическое сопровождение в Ростове-на-Дону. Комплексные услуги юриста по банкротству физических и юридических лиц. Бесплатные правовые консультации, защита прав в суде, составление документов, сопровождение сделок и разрешение споров.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="text-lg px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                      <Icon name="Phone" className="mr-2" size={20} />
                      Заказать звонок
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказать звонок</DialogTitle>
                      <DialogDescription>
                        Оставьте свой номер, и мы перезвоним в течение 15 минут
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => handleSubmit(e, 'call')} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Отправить</Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  <Icon name="Gift" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
              </div>
            </div>

            <Card className="bg-card/95 backdrop-blur shadow-2xl animate-scale-in border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Получите бесплатную консультацию юриста</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'request')} className="space-y-4">
                  <div>
                    <Label htmlFor="hero-name">Имя</Label>
                    <Input
                      id="hero-name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-phone">Телефон</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="8-928-226-46-38"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-message">Сообщение</Label>
                    <Textarea
                      id="hero-message"
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Юридические услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр юридических услуг: адвокатские услуги, правовая помощь, юридические консультации по правовым вопросам, защита прав в суде, юридическое сопровождение сделок, составление документов, регистрация бизнеса и разрешение споров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl text-background">
                      <Icon name={service.icon} size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-6">
            <div className="flex justify-center mb-6">
              <img 
                src="https://cdn.poehali.dev/projects/b5501066-ba01-4ce1-bc5c-8b702e72fd95/files/64574394-9900-4d0d-af54-f5c067729c38.jpg" 
                alt="Весы правосудия" 
                className="w-24 h-24 object-contain opacity-80"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">Почему выбирают нас</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon name={adv.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Получите бесплатную консультацию по вашему вопросу
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес офиса</p>
                    <p className="text-muted-foreground">Большая Садовая 198, офис 718</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:89282264638" className="text-primary hover:underline">
                      8-928-226-46-38
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Написать нам</CardTitle>
                <CardDescription>Опишите свою ситуацию, и мы поможем найти решение</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'contact')} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Юридические услуги</h3>
              <p className="text-blue-100">
                Профессиональная помощь в вопросах банкротства физических и юридических лиц
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Большая Садовая 198, офис 718</li>
                <li>
                  <a href="tel:89282264638" className="hover:text-white transition-colors">
                    8-928-226-46-38
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Банкротство физических лиц</li>
                <li>Банкротство юридических лиц</li>
                <li>Правовое консультирование</li>
                <li>Защита от кредиторов</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-blue-100">
            <p>&copy; 2025 Юридические услуги. Все права защищены.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;