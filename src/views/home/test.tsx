// import React, { useEffect, useRef } from 'react'

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// const AnimatedHeader: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
//   const headerRef = useRef<HTMLElement | null>(null)

//   useEffect(() => {
//     let width: number
//     let height: number
//     let points: any[] = []
//     let target: { x: number; y: number }
//     let animateHeader = true
//     let ctx: CanvasRenderingContext2D | null

//     const initHeader = () => {
//       width = window.innerWidth
//       height = window.innerHeight
//       target = { x: width / 2, y: height / 2 }

//       if (headerRef.current) {
//         headerRef.current.style.height = `${height}px`
//       }

//       const canvas = canvasRef.current
//       if (!canvas) return

//       canvas.width = width
//       canvas.height = height

//       ctx = canvas.getContext('2d')
//       if (!ctx) return

//       // Create points
//       points = []
//       for (let x = 0; x < width; x += width / 20) {
//         for (let y = 0; y < height; y += height / 20) {
//           const px = x + (Math.random() * width) / 20
//           const py = y + (Math.random() * height) / 20
//           points.push({
//             x: px,
//             originX: px,
//             y: py,
//             originY: py,
//             closest: [],
//             circle: null,
//             active: 0,
//           })
//         }
//       }

//       // Find the 5 closest points for each
//       points.forEach((p1) => {
//         const closest = points
//           .filter((p2) => p1 !== p2)
//           .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
//           .slice(0, 5)
//         p1.closest = closest
//       })

//       // Assign a circle to each point
//       points.forEach((p) => {
//         p.circle = createCircle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)')
//       })
//     }

//     const addListeners = () => {
//       if (!('ontouchstart' in window)) {
//         window.addEventListener('mousemove', mouseMove)
//       }
//       window.addEventListener('scroll', scrollCheck)
//       window.addEventListener('resize', resize)
//     }

//     const mouseMove = (e: MouseEvent) => {
//       target.x = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
//       target.y = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop
//     }

//     const scrollCheck = () => {
//       animateHeader = window.scrollY <= height
//     }

//     const resize = () => {
//       width = window.innerWidth
//       height = window.innerHeight

//       if (headerRef.current) {
//         headerRef.current.style.height = `${height}px`
//       }

//       const canvas = canvasRef.current
//       if (canvas) {
//         canvas.width = width
//         canvas.height = height
//       }
//     }

//     const initAnimation = () => {
//       animate()
//       points.forEach(shiftPoint)
//     }

//     const animate = () => {
//       if (!ctx) return

//       if (animateHeader) {
//         ctx.clearRect(0, 0, width, height)
//         points.forEach((p) => {
//           const distance = getDistance(target, p)

//           if (distance < 4000) {
//             p.active = 0.3
//             p.circle.active = 0.6
//           } else if (distance < 20000) {
//             p.active = 0.1
//             p.circle.active = 0.3
//           } else if (distance < 40000) {
//             p.active = 0.02
//             p.circle.active = 0.1
//           } else {
//             p.active = 0
//             p.circle.active = 0
//           }

//           drawLines(p)
//           p.circle.draw()
//         })
//       }

//       requestAnimationFrame(animate)
//     }

//     const shiftPoint = (p: any) => {
//       // You can replace TweenLite with GSAP or another library, here's a placeholder:
//       const randomTime = 1 + 1 * Math.random()
//       const newX = p.originX - 50 + Math.random() * 100
//       const newY = p.originY - 50 + Math.random() * 100

//       setTimeout(() => {
//         p.x = newX
//         p.y = newY
//         shiftPoint(p)
//       }, randomTime * 1000)
//     }

//     const drawLines = (p: any) => {
//       if (!p.active || !ctx) return
//       p.closest.forEach((closePoint: any) => {
//         ctx.beginPath()
//         ctx.moveTo(p.x, p.y)
//         ctx.lineTo(closePoint.x, closePoint.y)
//         ctx.strokeStyle = `rgba(156,217,249,${p.active})`
//         ctx.stroke()
//       })
//     }

//     const createCircle = (pos: any, rad: number, color: string) => {
//       let active = 0

//       const draw = () => {
//         if (!active || !ctx) return
//         ctx.beginPath()
//         ctx.arc(pos.x, pos.y, rad, 0, Math.PI * 2, false)
//         ctx.fillStyle = `rgba(156,217,249,${active})`
//         ctx.fill()
//       }

//       return { pos, radius: rad, color, active, draw }
//     }

//     const getDistance = (p1: any, p2: any): number => {
//       return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2
//     }

//     initHeader()
//     initAnimation()
//     addListeners()

//     return () => {
//       window.removeEventListener('mousemove', mouseMove)
//       window.removeEventListener('scroll', scrollCheck)
//       window.removeEventListener('resize', resize)
//     }
//   }, [])

//   return (
//     <header
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//       }}
//       ref={headerRef}
//     >
//       <canvas id="demo-canvas" ref={canvasRef} />
//     </header>
//   )
// }

// export default AnimatedHeader

// import React, { useEffect, useRef } from 'react'

// class Star {
//   id: number

//   x: number

//   y: number

//   r: number

//   color: string

//   constructor(id: number, x: number, y: number) {
//     this.id = id
//     this.x = x
//     this.y = y
//     this.r = Math.floor(Math.random() * 2) + 1
//     const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
//     this.color = `rgba(255,255,255,${alpha})`
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.fillStyle = this.color
//     ctx.shadowBlur = this.r * 2
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
//     ctx.closePath()
//     ctx.fill()
//   }

//   move(ctx: CanvasRenderingContext2D, params: { backgroundSpeed: number }, HEIGHT: number) {
//     this.y -= 0.15 + params.backgroundSpeed / 100
//     if (this.y <= -10) this.y = HEIGHT + 10
//     this.draw(ctx)
//   }
// }

// class Dot {
//   id: number

//   x: number

//   y: number

//   r: number

//   maxLinks: number

//   speed: number

//   a: number

//   aReduction: number

//   color: string

//   linkColor: string

//   dir: number

//   constructor(id: number, x: number, y: number) {
//     this.id = id
//     this.x = x
//     this.y = y
//     this.r = Math.floor(Math.random() * 5) + 1
//     this.maxLinks = 2
//     this.speed = 0.5
//     this.a = 0.5
//     this.aReduction = 0.005
//     this.color = `rgba(255,255,255,${this.a})`
//     this.linkColor = `rgba(255,255,255,${this.a / 4})`
//     this.dir = Math.floor(Math.random() * 140) + 200
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.fillStyle = this.color
//     ctx.shadowBlur = this.r * 2
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
//     ctx.closePath()
//     ctx.fill()
//   }

//   link(ctx: CanvasRenderingContext2D, dots: Dot[]) {
//     if (this.id === 0) return
//     const previousDot1 = getPreviousDot(dots, this.id, 1)
//     const previousDot2 = getPreviousDot(dots, this.id, 2)
//     const previousDot3 = getPreviousDot(dots, this.id, 3)
//     if (!previousDot1) return

//     ctx.strokeStyle = this.linkColor
//     ctx.beginPath()
//     ctx.moveTo(previousDot1.x, previousDot1.y)
//     ctx.lineTo(this.x, this.y)
//     if (previousDot2) ctx.lineTo(previousDot2.x, previousDot2.y)
//     if (previousDot3) ctx.lineTo(previousDot3.x, previousDot3.y)
//     ctx.stroke()
//     ctx.closePath()
//   }

//   move(ctx: CanvasRenderingContext2D, dots: Dot[], params: { dotsSpeed: number }) {
//     this.a -= this.aReduction
//     if (this.a <= 0) {
//       this.die(dots)
//     }

//     this.color = `rgba(255,255,255,${this.a})`
//     this.linkColor = `rgba(255,255,255,${this.a / 4})`

//     this.x += Math.cos(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100)
//     this.y += Math.sin(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100)

//     this.draw(ctx)
//     this.link(ctx, dots)
//   }

//   die(dots: Dot[]) {
//     const index = dots.findIndex((dot) => dot?.id === this.id)
//     if (index !== -1) dots.splice(index, 1)
//   }
// }

// function getPreviousDot(dots: Dot[], id: number, stepback: number): Dot | false {
//   if (id === 0 || id - stepback < 0) return false
//   return dots[id - stepback] || false
// }

// function degToRad(deg: number): number {
//   return deg * (Math.PI / 180)
// }

// const CanvasBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   const stars: Star[] = []
//   const dots: Dot[] = []
//   const params = {
//     maxDistFromCursor: 50,
//     dotsSpeed: 0,
//     backgroundSpeed: 0,
//   }

//   let WIDTH = window.innerWidth
//   let HEIGHT = window.innerHeight
//   let ctx: CanvasRenderingContext2D | null = null
//   let mouseMoving = false
//   let mouseMoveChecker: NodeJS.Timeout
//   let mouseX = 0
//   let mouseY = 0

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     ctx = canvas.getContext('2d')
//     if (!ctx) return

//     setCanvasSize()
//     window.addEventListener('resize', setCanvasSize)
//     window.addEventListener('mousemove', onMouseMove)

//     for (let i = 0; i < 80; i++) {
//       stars.push(new Star(i, Math.random() * WIDTH, Math.random() * HEIGHT))
//     }

//     animate()
//   }, [])

//   const setCanvasSize = () => {
//     WIDTH = window.innerWidth
//     HEIGHT = window.innerHeight
//     if (canvasRef.current) {
//       canvasRef.current.width = WIDTH
//       canvasRef.current.height = HEIGHT
//     }
//   }

//   const onMouseMove = (e: MouseEvent) => {
//     mouseMoving = true
//     mouseX = e.clientX
//     mouseY = e.clientY
//     clearTimeout(mouseMoveChecker)
//     mouseMoveChecker = setTimeout(() => {
//       mouseMoving = false
//     }, 100)
//   }

//   const animate = () => {
//     if (!ctx) return
//     ctx.clearRect(0, 0, WIDTH, HEIGHT)

//     stars.forEach((star) => star.move(ctx!, params, HEIGHT))
//     dots.forEach((dot) => dot.move(ctx!, dots, params))

//     drawIfMouseMoving()
//     requestAnimationFrame(animate)
//   }

//   const drawIfMouseMoving = () => {
//     if (!mouseMoving) return

//     if (dots.length === 0) {
//       dots.push(new Dot(0, mouseX, mouseY))
//       dots[0].draw(ctx!)
//       return
//     }

//     const previousDot = dots[dots.length - 1]
//     const diffX = Math.abs(previousDot.x - mouseX)
//     const diffY = Math.abs(previousDot.y - mouseY)

//     if (diffX < 2 || diffY < 2) return

//     const xVariation = (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor + 1)
//     const yVariation = (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor + 1)

//     const newDot = new Dot(dots.length, mouseX + xVariation, mouseY + yVariation)
//     dots.push(newDot)
//     newDot.draw(ctx!)
//     newDot.link(ctx!, dots)
//   }

//   return (
//     <div>
//       <canvas
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//         }}
//         ref={canvasRef}
//       />
//     </div>
//   )
// }

// export default CanvasBackground

// import React, { useEffect, useRef } from 'react'
// import styled, { createGlobalStyle } from 'styled-components'

// // Global styles
// const GlobalStyle = createGlobalStyle`
//   html, body {
//     width: 100%;
//     height: 100%;
//     padding: 0;
//     margin: 0;
//     overflow: hidden;
//     background: linear-gradient(0deg, #191d1e 50%, #283139 100%);
//     background-attachment: fixed;
//   }
// `

// const Canvas = styled.canvas`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   opacity: 0.5;
// `

// const ParticleCanvas: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)

//     const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
//     const numParticles = 100

//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 5 + 2,
//         speedX: (Math.random() - 0.5) * 2,
//         speedY: (Math.random() - 0.5) * 2,
//       })
//     }

//     const animateParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       particles.forEach((p) => {
//         p.x += p.speedX
//         p.y += p.speedY

//         if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
//         if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

//         ctx.fillStyle = '#1da776'
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fill()
//       })
//       requestAnimationFrame(animateParticles)
//     }
//     animateParticles()

//     window.removeEventListener('resize', resizeCanvas)
//   }, [])

//   return <Canvas ref={canvasRef} />
// }

// const App: React.FC = () => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//       }}
//     >
//       <ParticleCanvas />
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useRef } from 'react'
// import styled from 'styled-components'

// const ParticleAnimation: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     canvas.width = window.innerWidth
//     let w = canvas.width
//     canvas.height = window.innerHeight
//     let h = canvas.height

//     const opts = {
//       len: 50,
//       count: 70,
//       baseTime: 30,
//       addedTime: 10,
//       dieChance: 0.05,
//       spawnChance: 3,
//       sparkChance: 0.1,
//       sparkDist: 20,
//       sparkSize: 3,
//       color: '#0b6b4b',
//       baseLight: 50,
//       addedLight: 10,
//       shadowToTimePropMult: 6,
//       baseLightInputMultiplier: 0.01,
//       addedLightInputMultiplier: 0.02,
//       cx: w / 2,
//       cy: h / 2,
//       repaintAlpha: 0.04,
//       hueChange: 0.1,
//     }

//     let tick = 0
//     let lines: any[] = []
//     let dieX = w / 2 / opts.len
//     let dieY = h / 2 / opts.len
//     const baseRad = (Math.PI * 2) / 6

//     ctx.fillStyle = '#21a475'
//     ctx.fillRect(0, 0, w, h)

//     const createLine = () => {
//       let x = 0
//       let y = 0
//       let addedX = 0
//       let addedY = 0
//       let rad = 0
//       let lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random()
//       let color = opts.color.replace('hue', (tick * opts.hueChange).toString())
//       let cumulativeTime = 0
//       let time = 0
//       let targetTime = 0

//       const reset = () => {
//         x = 0
//         y = 0
//         addedX = 0
//         addedY = 0
//         rad = 0
//         cumulativeTime = 0
//         beginPhase()
//       }

//       const beginPhase = () => {
//         x += addedX
//         y += addedY
//         time = 0
//         targetTime = Math.floor(opts.baseTime + opts.addedTime * Math.random())
//         rad += baseRad * (Math.random() < 0.5 ? 1 : -1)
//         addedX = Math.cos(rad)
//         addedY = Math.sin(rad)
//         if (Math.random() < opts.dieChance || x > dieX || x < -dieX || y > dieY || y < -dieY) {
//           reset()
//         }
//       }

//       const step = () => {
//         time++
//         cumulativeTime++
//         if (time >= targetTime) beginPhase()
//         const prop = time / targetTime
//         const wave = Math.sin((prop * Math.PI) / 2)
//         const posX = addedX * wave
//         const posY = addedY * wave

//         ctx.shadowBlur = prop * opts.shadowToTimePropMult
//         ctx.shadowColor = color.replace(
//           'light',
//           (opts.baseLight + opts.addedLight * Math.sin(cumulativeTime * lightInputMultiplier)).toString(),
//         )
//         ctx.fillStyle = ctx.shadowColor
//         ctx.fillRect(opts.cx + (x + posX) * opts.len, opts.cy + (y + posY) * opts.len, 2, 2)

//         if (Math.random() < opts.sparkChance) {
//           ctx.fillRect(
//             opts.cx +
//               (x + posX) * opts.len +
//               Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
//               opts.sparkSize / 2,
//             opts.cy +
//               (y + posY) * opts.len +
//               Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
//               opts.sparkSize / 2,
//             opts.sparkSize,
//             opts.sparkSize,
//           )
//         }
//       }

//       return { step }
//     }

//     function loop() {
//       requestAnimationFrame(loop)
//       tick++
//       ctx.globalCompositeOperation = 'source-over'
//       ctx.shadowBlur = 0
//       ctx.fillStyle = `#21a475`
//       ctx.fillRect(0, 0, w, h)
//       ctx.globalCompositeOperation = 'lighter'

//       if (lines.length < opts.count && Math.random() < opts.spawnChance) lines.push(createLine())
//       lines.forEach((line) => line.step())
//     }

//     loop()

//     const handleResize = () => {
//       w = window.innerWidth
//       canvas.width = w
//       h = window.innerHeight
//       canvas.height = h
//       ctx.fillStyle = '#21a475'
//       ctx.fillRect(0, 0, w, h)
//       opts.cx = w / 2
//       opts.cy = h / 2
//       dieX = w / 2 / opts.len
//       dieY = h / 2 / opts.len
//     }

//     window.addEventListener('resize', handleResize)
//     window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <canvas
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//       }}
//       ref={canvasRef}
//     />
//   )
// }

// export default ParticleAnimation
