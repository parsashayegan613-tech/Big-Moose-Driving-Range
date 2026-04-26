import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export default function DemoOne() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <WebGLShader/> 
      <div className="relative border border-[#27272a] p-2 w-full mx-auto max-w-3xl z-10 backdrop-blur-sm">
      <main className="relative border border-[#27272a] py-16 px-8 overflow-hidden bg-black/40">
                <h1 className="mb-4 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,5rem)] leading-tight drop-shadow-lg">Big Moose<br/>Driving Range</h1>
                <p className="text-white/80 px-6 text-center text-sm md:text-lg max-w-xl mx-auto drop-shadow-md">Unleashing your best swing through premium mats, exact targets, and absolute focus.</p>
                <div className="my-10 flex items-center justify-center gap-2">
                    <span className="relative flex h-3 w-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <p className="text-sm font-semibold text-green-400 drop-shadow-sm">35 Bays Open Now</p>
                </div>
                
            <div className="flex justify-center mt-4"> 
                <LiquidButton className="text-white border-white/20 rounded-full" size={'xl'}>Get a Bucket</LiquidButton> 
            </div> 
            </main>
            </div>
    </div>
  )
}
