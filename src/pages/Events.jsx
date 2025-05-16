import EventCards from '@/components/EventsCard'
import config from '@/config/config'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Events() {
    return (
        <>
            {/* Seção de Eventos */}
            <section id="event" className=" relative overflow-hidden -translate-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4"
                >
                    {/* Cabeçalho da Seção */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-[#FFDE59] font-['TexGyreTermes'] mb-2"
                        >
                            Espero por você!
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl md:text-5xl font-['BarbraHigh'] text-[#FFDE59] leading-tight"
                        >
                            Informações
                        </motion.h2>

                        {/* Linha decorativa */}

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-[#FFDE59] font-['TexGyreTermes'] mb-2 text-[20px]"
                        >
                            Confirme presença até 29/05/2025
                        </motion.span>
                    </motion.div>

                    {/* Grade de Eventos */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        
                        <EventCards events={config.data.agenda} />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}