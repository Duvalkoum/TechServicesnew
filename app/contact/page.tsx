"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect, useRef } from "react"

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const animation = useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Merci pour votre message ! Notre équipe vous contactera sous 24h.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-delay">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div
            ref={animation.ref}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto transition-all duration-1000 ${
              animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Quartier Deïdo, Douala, Cameroun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <a
                        href="tel:+237622000000"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +237 622 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a
                        href="mailto:TechServices@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        TechServices@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-xl">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-semibold">8h00 - 18h00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-semibold">9h00 - 13h00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="font-semibold text-muted-foreground/60">Fermé</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Envoyez-nous un message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+237 XXX XXX XXX"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Objet de votre message"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre demande..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base hover:scale-105 transition-transform"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Google Maps Embed */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                <iframe
                  title="Localisation - Deïdo, Douala"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.683937188057!2d9.697779614753!3d4.062729997068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610c9e9e9e9e9f%3A0x9e9e9e9e9e9e9e9f!2sDe%C3%AFdo%2C%20Douala!5e0!3m2!1sfr!2scm!4v1698765432100!5m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-6 text-center bg-card/80 backdrop-blur-sm">
                <p className="text-lg font-semibold flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Quartier Deïdo, Douala, Cameroun
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Cliquez sur la carte pour ouvrir dans Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}