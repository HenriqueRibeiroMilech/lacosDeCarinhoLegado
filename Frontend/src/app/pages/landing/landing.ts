import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {
  // Animação do card de presentes
  heroGifts = [
    { icon: '🍳', name: 'Jogo de Panelas', reserved: false },
    { icon: '☕', name: 'Cafeteira', reserved: false },
    { icon: '🛏️', name: 'Jogo de Cama', reserved: false },
    { icon: '🍽️', name: 'Aparelho de Jantar', reserved: false },
    { icon: '🧊', name: 'Geladeira', reserved: false },
    { icon: '📺', name: 'Smart TV', reserved: false },
  ];

  heroReservedCount = 0;
  heroTotalGifts = 50; // Total fictício da lista
  private animationInterval: any;
  private animationTimeout: any;

  ngOnInit() {
    this.startGiftAnimation();
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  startGiftAnimation() {
    // Reseta tudo
    this.heroGifts.forEach(g => g.reserved = false);
    this.heroReservedCount = 0;

    let currentIndex = 0;

    // Reserva um presente a cada 1.5 segundos
    this.animationInterval = setInterval(() => {
      if (currentIndex < this.heroGifts.length) {
        this.heroGifts[currentIndex].reserved = true;
        this.heroReservedCount = Math.round(((currentIndex + 1) / this.heroGifts.length) * this.heroTotalGifts);
        currentIndex++;
      } else {
        // Todos reservados, aguarda 3 segundos e reinicia
        clearInterval(this.animationInterval);
        this.animationTimeout = setTimeout(() => {
          this.startGiftAnimation();
        }, 3000);
      }
    }, 1500);
  }

  get heroProgress(): number {
    const reserved = this.heroGifts.filter(g => g.reserved).length;
    return Math.round((reserved / this.heroGifts.length) * 100);
  }

  // Depoimentos de clientes
  testimonials = [
    {
      name: 'Marina & Lucas',
      event: 'Casamento',
      date: 'Novembro 2025',
      rating: 5,
      text: 'Simplesmente perfeito! Conseguimos organizar toda nossa lista de presentes de forma prática. Os convidados adoraram a facilidade de escolher e reservar os presentes. Recebemos tudo que sonhávamos para nossa nova casa!',
      highlight: 'Recebemos 95% dos presentes da lista!'
    },
    {
      name: 'Fernanda & Pedro',
      event: 'Chá de Panela',
      date: 'Outubro 2025',
      rating: 5,
      text: 'O chá de panela foi um sucesso! A plataforma é super intuitiva e conseguimos evitar presentes repetidos. O QR Code facilitou muito para os convidados acessarem a lista durante a festa.',
      highlight: 'Zero presentes repetidos!'
    },
    {
      name: 'Carolina & Rafael',
      event: 'Casamento',
      date: 'Dezembro 2025',
      rating: 5,
      text: 'Melhor decisão que tomamos! A confirmação de presença integrada nos ajudou muito no planejamento. Sabíamos exatamente quantos convidados esperar e quais presentes já estavam reservados.',
      highlight: 'Planejamento perfeito!'
    },
    {
      name: 'Juliana & Marcos',
      event: 'Chá de Casa Nova',
      date: 'Setembro 2025',
      rating: 5,
      text: 'Usamos para nosso chá de casa nova e foi incrível! Pudemos adicionar itens personalizados além do catálogo. Os convidados comentaram que foi muito fácil escolher os presentes.',
      highlight: 'Interface super fácil!'
    },
    {
      name: 'Amanda & Thiago',
      event: 'Casamento',
      date: 'Agosto 2025',
      rating: 5,
      text: 'A função de baixar PDF com a lista de convidados confirmados foi essencial para nossa organização. Recomendo demais para todos os casais!',
      highlight: 'Organização impecável!'
    },
    {
      name: 'Beatriz & Gustavo',
      event: 'Chá de Panela',
      date: 'Novembro 2025',
      rating: 5,
      text: 'Nosso chá de panela não teria sido tão organizado sem essa plataforma. As categorias de presentes facilitaram muito a escolha dos convidados.',
      highlight: 'Convidados adoraram!'
    }
  ];

  // Features principais
  features = [
    {
      icon: '🎁',
      title: 'Lista de Presentes Inteligente',
      description: 'Crie sua lista com itens do nosso catálogo completo ou adicione presentes personalizados. Seus convidados reservam online e você acompanha tudo em tempo real.',
      benefits: ['Catálogo com +100 itens', 'Itens personalizados', 'Reservas em tempo real']
    },
    {
      icon: '✅',
      title: 'Confirmação de Presença',
      description: 'Saiba exatamente quem vai ao seu evento. Convidados confirmam presença com facilidade pelo link ou QR Code.',
      benefits: ['Controle de RSVPs', 'Confirmações em tempo real', 'Exportar para PDF']
    },
    {
      icon: '📱',
      title: 'Compartilhe com QR Code',
      description: 'Gere um QR Code exclusivo para sua lista. Perfeito para convites, decoração da festa ou compartilhar nas redes sociais.',
      benefits: ['QR Code personalizado', 'Link único', 'Fácil compartilhamento']
    },
    {
      icon: '📊',
      title: 'Acompanhamento Completo',
      description: 'Painel intuitivo para acompanhar presentes reservados, confirmações de presença e estatísticas do seu evento.',
      benefits: ['Dashboard completo', 'Estatísticas em tempo real', 'Histórico de reservas']
    }
  ];

  // Estatísticas
  stats = [
    { value: '10.000+', label: 'Casais felizes' },
    { value: '50.000+', label: 'Presentes entregues' },
    { value: '98%', label: 'Satisfação' },
    { value: '0', label: 'Presentes repetidos' }
  ];

  // Passos de como funciona
  steps = [
    {
      number: '1',
      title: 'Crie sua conta',
      description: 'Cadastre-se em menos de 1 minuto'
    },
    {
      number: '2',
      title: 'Monte sua lista',
      description: 'Escolha presentes do catálogo ou adicione itens personalizados'
    },
    {
      number: '3',
      title: 'Compartilhe',
      description: 'Envie o link ou QR Code para seus convidados'
    },
    {
      number: '4',
      title: 'Acompanhe',
      description: 'Veja reservas e confirmações em tempo real'
    }
  ];

  // FAQ
  faqs = [
    {
      question: 'Qual o valor para usar a plataforma?',
      answer: 'Cobramos apenas um pagamento único! Ao contrário de outras plataformas, não temos mensalidade nem cobramos porcentagem sobre o valor dos presentes.',
      open: false
    },
    {
      question: 'Posso usar para chá de panela e casamento?',
      answer: 'Com certeza! Você pode criar listas separadas para cada evento - uma para o chá de panela e outra para o casamento.',
      open: false
    },
    {
      question: 'Os convidados precisam criar conta?',
      answer: 'Sim, os convidados fazem um cadastro rápido para garantir que cada presente seja reservado por uma pessoa identificada, evitando confusões.',
      open: false
    },
    {
      question: 'Como os convidados acessam minha lista?',
      answer: 'Você compartilha um link único ou QR Code. Eles acessam pelo celular ou computador, visualizam os presentes disponíveis e fazem a reserva.',
      open: false
    },
    {
      question: 'Posso editar a lista depois de criada?',
      answer: 'Sim! Você pode adicionar, remover ou editar itens a qualquer momento. Apenas itens já reservados não podem ser removidos.',
      open: false
    },
    {
      question: 'E se um convidado desistir de um presente?',
      answer: 'O convidado pode cancelar a reserva pela própria conta, e o presente volta a ficar disponível para outros.',
      open: false
    }
  ];

  currentTestimonialIndex = 0;

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex === 0
      ? this.testimonials.length - 1
      : this.currentTestimonialIndex - 1;
  }

  get visibleTestimonials() {
    // Retorna 3 depoimentos para desktop, começando do índice atual
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.currentTestimonialIndex + i) % this.testimonials.length;
      result.push(this.testimonials[index]);
    }
    return result;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Swipe Support
  private touchStartX = 0;
  private touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const threshold = 50; // Mínimo de pixels para considerar swipe
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        this.prevTestimonial(); // Swipe direita -> Anterior
      } else {
        this.nextTestimonial(); // Swipe esquerda -> Próximo
      }
    }
  }
}
