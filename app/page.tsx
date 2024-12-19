import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Header from "@/components/ui/header";

export default function VRGamingLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gold-300 relative">
            <Header />
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full  z-[1]">
        <Image
          src="/image.png"  // Replace with your actual image path
          alt="Background VR gaming"
          fill
          priority
          className="object-cover"
          quality={100}
        />

        {/* Overlay to ensure text readability */}
      </div>
      <main className="flex-1 relative z-[2]">

        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text text-transparent">
                  Enter New Realities
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-200 md:text-xl">
                  Immerse yourself in cutting-edge VR experiences that redefine gaming.
                  Step into worlds beyond imagination.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-black/70 border-amber-500 text-amber-200 placeholder-amber-500/70"
                    placeholder="Enter your email for early access"
                    type="email"
                  />
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold">
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-center text-amber-400/80">
                  Be first to experience our latest VR releases.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-black/80">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Featured Games
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative rounded-lg overflow-hidden bg-black/70 border border-amber-900/50 shadow-lg hover:shadow-amber-500/20">
                <Link href="/games/cyberquest">
                  <div className="relative h-48">
                    <Image
                      src="/api/placeholder/400/300"
                      alt="CyberQuest VR"
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-400 group-hover:text-amber-300">
                      CyberQuest VR
                    </h3>
                    <p className="text-sm text-amber-200/80">
                      Explore a neon-drenched cyberpunk metropolis in full VR.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group relative rounded-lg overflow-hidden bg-black/70 border border-amber-900/50 shadow-lg hover:shadow-amber-500/20">
                <Link href="/games/space-odyssey">
                  <div className="relative h-48">
                    <Image
                      src="/api/placeholder/400/300"
                      alt="Space Odyssey VR"
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-400 group-hover:text-amber-300">
                      Space Odyssey VR
                    </h3>
                    <p className="text-sm text-amber-200/80">
                      Journey through the cosmos in this epic space adventure.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group relative rounded-lg overflow-hidden bg-black/70 border border-amber-900/50 shadow-lg hover:shadow-amber-500/20">
                <Link href="/games/fantasy-realms">
                  <div className="relative h-48">
                    <Image
                      src="/api/placeholder/400/300"
                      alt="Fantasy Realms VR"
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-amber-400 group-hover:text-amber-300">
                      Fantasy Realms VR
                    </h3>
                    <p className="text-sm text-amber-200/80">
                      Wield magic and fight dragons in this immersive fantasy world.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-black font-semibold">
                <Link href="/games">Explore All Games</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-900/50 relative z-[2] bg-black/50">
        <p className="text-xs text-amber-400/80">
          © 2024 VRealm Games. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-amber-400/80 hover:text-amber-300 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-amber-400/80 hover:text-amber-300 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

