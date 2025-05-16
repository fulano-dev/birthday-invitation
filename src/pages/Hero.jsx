import { Calendar, Clock, Heart } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { Helmet } from 'react-helmet'; // Adicionado para preload das imagens
import foto1 from '../photos/foto1.JPG';
import foto2 from '../photos/foto2.JPG';
import foto3 from '../photos/foto3.JPG';
import foto4 from '../photos/foto4.JPG';
import foto5 from '../photos/foto5.JPG';
import logoPUC from '../photos/logo-puc.png';

const images = [foto1, foto2, foto3, foto4, foto5];

export default function Hero({ convidados = [] }) {
    const [mainEmoji, setMainEmoji] = useState("🎓");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const sequence = ["🎓", "🎓"];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % sequence.length;
            setMainEmoji(sequence[index]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const CountdownTimer = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        function calculateTimeLeft() {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutos: Math.floor((difference / 1000 / 60) % 60),
                    segundos: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        }
        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearInterval(timer);
        }, [targetDate]);

        return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {Object.keys(timeLeft).map((interval) => (
                    <div
                        key={interval}
                        className="flex flex-col items-center p-3 bg-[#F2B21D] rounded-xl border border-[#F2B21D] transition-all duration-500"
                    >
                        <span className="text-xl sm:text-2xl font-['TexGyreTermes'] font-bold text-black">
                            {timeLeft[interval]}
                        </span>
                        <span className="text-xs text-black capitalize font-['TexGyreTermes']">{interval}</span>
                    </div>
                ))}
            </div>
        );
    };

    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight
                        }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${i % 3 === 0 ? 'text-[#FFDE59]' :
                                i % 3 === 1 ? 'text-[#FFDE59]' :
                                    'text-[#FFDE59]'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Helmet>
              <link rel="preload" as="image" href={foto1} />
              <link rel="preload" as="image" href={foto2} />
              <link rel="preload" as="image" href={foto3} />
              <link rel="preload" as="image" href={foto4} />
              <link rel="preload" as="image" href={foto5} />
            </Helmet>
            <section id="home" className=" flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center relative overflow-hidden">
                {import.meta.env.VITE_AMBIENTE === 'HML' && (
                    <div className="bg-red-600 text-black text-center py-4 px-4 mb-6 shadow-md w-full">
                        <h2 className="text-lg sm:text-2xl font-['TexGyreTermes'] font-bold uppercase">AMBIENTE DE HOMOLOGAÇÃO</h2>
                        <p className="text-xs sm:text-sm mt-1 font-['TexGyreTermes']">
                          Esta página é destinada apenas para testes. As confirmações feitas aqui não afetarão a lista oficial de convidados.
                        </p>
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 relative z-10"
                >
                    <img src={logoPUC} alt="Logo PUC" className="h-16 sm:h-20 mx-auto mb-4" />
                    <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-[88px] leading-none text-[#FFDE59]"
                      style={{ fontFamily: 'BarbraHigh' }}
                        >
                            24 anos
                        </motion.h2>
                        
                        

                    <div className="space-y-4">
                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-[#FFDE59] max-w-md mx-auto space-y-2 font-['TexGyreTermes']"
                        >
                      <p className="text-sm sm:text-base font-['Arial'] text-[#FFDE59]">
                            do
                            </p>
                            
                        </motion.div>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-2xl text-[48px]  md:text-5xl font-['BrittanySignature'] text-[#FFDE59]"
                        >
                            João Pedro
                        </motion.h2>

  
                        
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mx-auto mt-6"
                        style={{ marginTop: '50px' }}
                    >
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="relative max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 rounded-2xl" />

                        <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl ">


                            <div className="space-y-6 text-center">
                                <div className="space-y-3">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Calendar className="w-4 h-4 text-[#FFDE59]" />
                                        <span className="text-[#FFDE59] font-['BarbraHigh'] font-medium text-sm sm:text-base">
                                            {formatEventDate(config.data.date, "full")}
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Clock className="w-4 h-4 text-[#FFDE59]" />
                                        <span className="text-[#FFDE59] font-['BarbraHigh'] font-medium text-sm sm:text-base">
                                            {config.data.time}
                                        </span>
                                    </motion.div>
                                </div>



                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                    className="space-y-2"
                                >
                                        <p className="text-[#FFDE59] font-['BarbraHigh'] font-serif italic text-sm">
                                          Olá
                                        </p>
                                        <p className="text-[#FFDE59] font-['BarbraHigh'] font-semibold text-xl sm:text-2xl">
                                          {convidados.map((c, i) => {
                                            const isLast = i === convidados.length - 1;
                                            const isSecondLast = i === convidados.length - 2;
                                            return `${c.nome}${isLast ? '.' : isSecondLast ? ' e ' : ', '}`;
                                          }).join('')}
                                        </p>
                                </motion.div>
                            </div>

                        </div>

                    </motion.div>   
                </motion.div>
            </section>
        </>
    )
}
