"use client"
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testmonalsection = () => {
  const testimonials = [
    {
      name: 'Dr. Kamrul Islam',
      role: 'Chief of Cardiology, Mayo Clinic',
      text: 'NeuroPulse AI became our second set of eyes. It surfaces insights we miss during hectic shifts and does it with full traceability.',
      rating: 5,
    },
    {
      name: 'Abdur Rahaman',
      role: 'Patient ambassador',
      text: 'I uploaded my history, the AI summarized everything for my doctor, and I was routed to the right specialist instantly.',
      rating: 5,
    },
    {
      name: 'Dr. Fahim Asrtaf',
      role: 'Emergency Medicine, Johns Hopkins',
      text: 'Report analysis that used to take 30 minutes now takes under two, with better accuracy and clear next steps.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-[#f0f4ff] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Social proof</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900">Trusted by healthcare leaders</h2>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
          Thousands of clinicians trust NeuroPulse AI to augment their teams and create better experiences for every patient.
        </p>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={30}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="rounded-[32px] border border-white/70 bg-white/90 p-12 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={`${testimonial.name}-${idx}`} className="h-5 w-5 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-slate-700">
                    “{testimonial.text}”
                  </blockquote>
                  <div className="mt-8">
                    <p className="text-xl font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testmonalsection;
