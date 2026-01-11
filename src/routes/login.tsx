import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { LoginForm } from "@/features/auth/components/login-form";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
	return (
		<AuthLayout
			title="Welcome back"
			subtitle="Sign in to your account to continue"
		>
			<LoginForm />
		</AuthLayout>
	);
}

// import { MosqueIcon } from './components/MosqueIcon';

// export const Route = createFileRoute('/login')({ component: App })

// interface MosqueIconProps {
//   size?: number
//   color?: string
//   className?: string
// }

// export function MosqueIcon({
//   size = 64,
//   color = '#D4AF37',
//   className = '',
// }: MosqueIconProps) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 256 256"
//       className={className}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g>
//         <g>
//           <g>
//             <path
//               fill={color}
//               d="M120.5,10.1c-18.3,1.6-32.6,5.6-47.4,13.3C51.6,34.6,33.3,53.2,22.4,74.9C14,91.8,10,108.7,10,128c0,19.3,4,36.3,12.4,53c9.6,19.2,25.8,36.7,44.4,48c38.7,23.6,88.4,22.6,126.4-2.7c49.1-32.6,66.6-95.9,41.4-149.1c-5.9-12.3-13-22.3-23.2-32.6c-18.9-18.9-41-29.9-67.7-33.7C138.8,10.3,124.5,9.7,120.5,10.1z M133.7,69.3c7,5.3,12.1,9.8,18,15.8c10.3,10.5,13.7,17.6,13,26.5c-0.3,4.6-1.3,8.4-3,12.2c-1.3,2.9-1.4,3.1-1.4,10.2v7.3h8.8h8.8v-14.3c0-13.8,0-14.4-1-16.3c-0.6-1.2-1.1-3.1-1.2-5.2c-0.2-3-0.1-3.6,1.1-5.7c2.1-3.8,8.1-9,14.4-12.2l2.4-1.2l2,0.9c5.6,2.5,13.5,9.1,15.4,12.8c1.2,2.4,1.2,7.6,0,9.7c-0.7,1.3-0.8,4.5-0.8,39.6v38.1l-1.2,1.1l-1.1,1.2h-16.5c-20.2,0-18.7,0.6-18.7-7.1c0-5.1,0-5.2-1.5-6.9l-1.5-1.8l-1.5,1.8l-1.5,1.8v5.1c0,4.6-0.1,5.2-1,6.1l-1,1.1h-14.4c-14,0-14.3,0-15.4-1c-1-1-1.1-1.2-1.1-9.3v-8.4l-1.3-2.3c-0.7-1.3-2.1-3-3-3.9l-1.7-1.6l-1.7,1.6c-0.9,0.8-2.3,2.6-3,3.9l-1.3,2.3v8.3c0,7.9,0,8.4-1,9.4l-1,1.1h-14.4c-17.7,0-16.4,0.6-16.4-7.1c0-5.1,0-5.2-1.5-6.9l-1.5-1.8l-1.5,1.8l-1.5,1.8v5.1c0,4.6-0.1,5.2-1,6.1l-1,1.1H64.6H48.1l-0.9-1.2c-1-1.2-1-1.5-1-38.8c0-37.4,0-37.6-1-39.5c-1.3-2.5-1.7-7-0.8-9.1c0.4-0.9,1.5-2.7,2.5-4c3.3-4.1,12.7-10.5,15.4-10.4c1.4,0,6.2,2.8,10.1,5.8c3,2.3,5.9,5.5,7.1,7.8c1.2,2.3,1.2,6.1,0,9.2c-0.8,2.3-0.9,3.6-0.9,17.1v14.7h8.5h8.5v-7.5c0-4.2-0.2-7.7-0.5-8c-0.8-0.8-2.9-6.8-3.5-10.2c-2.1-10.9,1.1-18.7,12.3-30.3c5.9-6,11.4-10.9,18-15.9C127.7,65.1,128.1,65.1,133.7,69.3z"
//             />
//             <path
//               fill={color}
//               d="M122.7,78.4c-13,10.4-21.8,20.8-23.6,28.1c-1.1,4.2,0,10.6,2.5,15.7l0.9,1.8h25.4h25.4l0.9-1.8c2.5-5,3.6-11.6,2.5-15.7c-1.8-7.1-10.9-17.8-23.6-27.9c-2.7-2.2-5.1-4-5.3-4C127.7,74.4,125.4,76.2,122.7,78.4z"
//             />
//             <path
//               fill={color}
//               d="M59.2,96.7c-3.6,2.4-7.3,5.9-7.7,7.4c-0.2,0.6,0,1.9,0.4,2.9l0.7,1.7h9.5h9.5l0.8-1.6c0.4-1,0.6-2,0.4-2.8c-0.4-1.7-2.7-4.2-6-6.5C62.1,94.5,62.4,94.6,59.2,96.7z"
//             />
//             <path
//               fill={color}
//               d="M190.1,97.1c-3.9,2.6-6.6,5.4-7.1,7.2c-0.2,0.7,0,1.8,0.5,2.8l0.7,1.6l9.6-0.1l9.6-0.1l0.6-1.9c0.6-1.8,0.6-2.1-0.4-3.6c-1-1.6-5.2-5.2-8.4-7.1l-1.7-1L190.1,97.1z"
//             />
//             <path
//               fill={color}
//               d="M53.6,149.5v33h11.1h11.1v-3.2c0-4,0.8-6,3.4-8.7c3-3.1,5.4-4.7,7-4.7c1.7,0,4,1.6,7,4.7c2.6,2.7,3.4,4.8,3.4,8.7v3.2h9h9l0.2-7.3c0.1-6.6,0.3-7.4,1.2-9.3c1.3-2.6,8.4-9.8,10.5-10.8c1.4-0.7,1.7-0.7,3.1,0c2.2,1.1,8.7,7.7,10.2,10.5c1.3,2.3,1.3,2.7,1.5,9.6l0.2,7.3h9h9v-3.2c0-4,0.8-6,3.4-8.7c3-3.1,5.4-4.7,7-4.7c1.7,0,4,1.6,7,4.7c2.6,2.7,3.4,4.8,3.4,8.7v3.2h11.3h11.3v-33v-33h-8.8h-8.8v15.1v15.1l-1.3,1.3l-1.3,1.3h-13.7h-13.7l-1.3-1.3l-1.3-1.3v-7.4v-7.4l-2.3,0c-1.2,0-11.1,0-21.9,0c-10.8,0-20.7,0-22.1,0l-2.5,0l-0.1,7.7l-0.1,7.7l-1.3,1.1l-1.3,1.1H87.5c-13.4,0-14.5-0.1-15.7-1.8c-0.4-0.6-0.6-4.7-0.6-15.9v-15.1h-8.8h-8.8L53.6,149.5L53.6,149.5z"
//             />
//           </g>
//         </g>
//       </g>
//     </svg>
//   )
// }
// export default function App() {
//   return (
//     <div
//       className="flex flex-col bg-gray-50 min-h-screen"
//       style={{ fontFamily: 'Inter, sans-serif' }}
//     >
//       {/* Header */}
//       <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-16">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="mb-6">
//             <MosqueIcon
//               size={96}
//               color="#D4AF37"
//               className="mx-auto opacity-90"
//             />
//           </div>
//           <h1
//             className="text-5xl md:text-6xl mb-4"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Concept 2: Mosque Silhouette
//           </h1>
//           <p
//             className="text-2xl text-gray-300 mb-3"
//             style={{ fontFamily: 'Scheherazade New, serif' }}
//           >
//             Complete Logo System with Favicons & Variants
//           </p>
//           <p className="text-xl text-gray-400">
//             Multiple sizes, styles, and color variations
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 space-y-16 w-full">
//         {/* Favicon Sizes */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Favicon Sizes (Web)
//           </h2>
//           <div className="bg-white rounded-3xl shadow-2xl p-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {/* 16x16 */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-[200px]">
//                   <div className="bg-gray-800 rounded flex items-center justify-center w-16 h-16">
//                     <MosqueIcon size={32} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   16×16px
//                 </p>
//                 <p className="text-sm text-gray-600">Browser tab</p>
//               </div>

//               {/* 32x32 */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-[200px]">
//                   <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded flex items-center justify-center w-24 h-24">
//                     <MosqueIcon size={48} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   32×32px
//                 </p>
//                 <p className="text-sm text-gray-600">Standard favicon</p>
//               </div>

//               {/* 64x64 */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-[200px]">
//                   <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-lg flex items-center justify-center w-32 h-32">
//                     <MosqueIcon size={64} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   64×64px
//                 </p>
//                 <p className="text-sm text-gray-600">High-res favicon</p>
//               </div>

//               {/* 180x180 */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-xl p-6 mb-4 flex items-center justify-center h-[200px]">
//                   <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg w-32 h-32">
//                     <MosqueIcon size={64} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   180×180px
//                 </p>
//                 <p className="text-sm text-gray-600">Apple touch icon</p>
//               </div>
//             </div>

//             <div className="mt-8 bg-gray-100 rounded-xl p-6">
//               <h3
//                 className="text-gray-900 mb-3 flex items-center gap-2"
//                 style={{ fontWeight: 700 }}
//               >
//                 <span className="text-gray-600">💻</span>
//                 HTML Implementation
//               </h3>
//               <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
//                 <code>{`<!-- Add to <head> section -->
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png">
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="manifest" href="/site.webmanifest">`}</code>
//               </pre>
//             </div>
//           </div>
//         </section>

//         {/* App Icons (iOS & Android) */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             App Icons (iOS & Android)
//           </h2>
//           <div className="bg-white rounded-3xl shadow-2xl p-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* iOS Icon */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-3xl p-8 mb-4 flex items-center justify-center">
//                   <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl size-[380px]">
//                     <MosqueIcon size={350} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   iOS App Icon
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   1024×1024px (rounded corners)
//                 </p>
//               </div>

//               {/* Android Adaptive Icon */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-3xl p-8 mb-4 flex items-center justify-center">
//                   <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-2xl w-[180px] h-[180px]">
//                     <MosqueIcon size={150} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   Android Adaptive
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   512×512px (circular mask)
//                 </p>
//               </div>

//               {/* Android Legacy */}
//               <div className="text-center">
//                 <div className="bg-gray-100 rounded-2xl p-8 mb-4 flex items-center justify-center">
//                   <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl w-[180px] h-[180px]">
//                     <MosqueIcon size={150} color="#D4AF37" />
//                   </div>
//                 </div>
//                 <p className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>
//                   Android Legacy
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   512×512px (rounded square)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Color Variations */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Color Variations
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Midnight Black - PRIMARY */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6 ring-4 ring-gray-900">
//               <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Midnight Black ⭐
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs">
//                   #1F2937
//                 </span>
//                 <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs">
//                   #111827
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>

//             {/* Original (Teal) */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gradient-to-b from-teal-800 to-teal-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Original - Teal
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-teal-800 text-white rounded-full text-xs">
//                   #00695C
//                 </span>
//                 <span className="px-3 py-1 bg-teal-900 text-white rounded-full text-xs">
//                   #004D40
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>

//             {/* Emerald Green */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gradient-to-b from-emerald-700 to-emerald-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Emerald Green
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-emerald-700 text-white rounded-full text-xs">
//                   #047857
//                 </span>
//                 <span className="px-3 py-1 bg-emerald-900 text-white rounded-full text-xs">
//                   #064E3B
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>

//             {/* Navy Blue */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Navy Blue
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-blue-800 text-white rounded-full text-xs">
//                   #1E40AF
//                 </span>
//                 <span className="px-3 py-1 bg-blue-900 text-white rounded-full text-xs">
//                   #1E3A8A
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>

//             {/* Burgundy Red */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gradient-to-b from-red-800 to-red-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Burgundy Red
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-red-800 text-white rounded-full text-xs">
//                   #991B1B
//                 </span>
//                 <span className="px-3 py-1 bg-red-900 text-white rounded-full text-xs">
//                   #7F1D1D
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>

//             {/* Cyan Ocean */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gradient-to-b from-cyan-700 to-cyan-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Cyan Ocean
//               </h3>
//               <div className="flex gap-2 flex-wrap">
//                 <span className="px-3 py-1 bg-cyan-700 text-white rounded-full text-xs">
//                   #0E7490
//                 </span>
//                 <span className="px-3 py-1 bg-cyan-900 text-white rounded-full text-xs">
//                   #164E63
//                 </span>
//                 <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">
//                   #D4AF37
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Monochrome Versions */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Monochrome Versions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* White on Dark */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gray-900 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#FFFFFF" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 White on Dark
//               </h3>
//               <p className="text-sm text-gray-600">For dark backgrounds</p>
//             </div>

//             {/* Black on Light */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gray-100 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#111827" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Black on Light
//               </h3>
//               <p className="text-sm text-gray-600">For light backgrounds</p>
//             </div>

//             {/* Gold Outline */}
//             <div className="bg-white rounded-3xl shadow-2xl p-6">
//               <div className="bg-gray-800 rounded-2xl p-8 mb-4 flex items-center justify-center h-[200px]">
//                 <MosqueIcon size={80} color="#D4AF37" />
//               </div>
//               <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>
//                 Gold on Dark
//               </h3>
//               <p className="text-sm text-gray-600">For premium designs</p>
//             </div>
//           </div>
//         </section>

//         {/* Style Variations */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Style Variations
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Detailed Version */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <h3
//                 className="text-2xl text-gray-900 mb-4"
//                 style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//               >
//                 Detailed Version
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Full detail with shadow effects and enhanced styling
//               </p>
//               <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center">
//                 <div className="relative">
//                   <MosqueIcon
//                     size={120}
//                     color="#D4AF37"
//                     className="drop-shadow-2xl"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-32 h-32 bg-amber-600 opacity-20 blur-3xl rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Simplified Version */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <h3
//                 className="text-2xl text-gray-900 mb-4"
//                 style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//               >
//                 Simplified Version
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Clean, minimal design for small sizes and quick recognition
//               </p>
//               <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center">
//                 <MosqueIcon size={120} color="#D4AF37" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Logo with Text Lockups */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Logo with Text Lockups
//           </h2>
//           <div className="space-y-8">
//             {/* Horizontal Lockup */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <h3
//                 className="text-xl text-gray-900 mb-4"
//                 style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//               >
//                 Horizontal Lockup
//               </h3>
//               <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center">
//                 <div className="flex items-center gap-6">
//                   <MosqueIcon size={80} color="#D4AF37" />
//                   <div className="text-left">
//                     <h2
//                       className="text-5xl text-white mb-2"
//                       style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//                     >
//                       Islam Times
//                     </h2>
//                     <p
//                       className="text-2xl text-gray-300"
//                       style={{ fontFamily: 'Scheherazade New, serif' }}
//                     >
//                       أوقات الصلاة
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Vertical Lockup */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <h3
//                 className="text-xl text-gray-900 mb-4"
//                 style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//               >
//                 Vertical Lockup
//               </h3>
//               <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center">
//                 <div className="flex flex-col items-center gap-4">
//                   <MosqueIcon size={100} color="#D4AF37" />
//                   <div className="text-center">
//                     <h2
//                       className="text-4xl text-white mb-2"
//                       style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//                     >
//                       Islam Times
//                     </h2>
//                     <p
//                       className="text-xl text-gray-300"
//                       style={{ fontFamily: 'Scheherazade New, serif' }}
//                     >
//                       أوقات الصلاة
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Icon Only */}
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <h3
//                 className="text-xl text-gray-900 mb-4"
//                 style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//               >
//                 Icon Only (No Text)
//               </h3>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 flex items-center justify-center">
//                 <div className="relative">
//                   <MosqueIcon
//                     size={120}
//                     color="#D4AF37"
//                     className="drop-shadow-2xl"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-40 h-40 bg-amber-600 opacity-20 blur-3xl rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Usage Guidelines */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Usage Guidelines
//           </h2>
//           <div className="bg-white rounded-3xl shadow-2xl p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Do's */}
//               <div>
//                 <h3
//                   className="text-2xl text-emerald-600 mb-4 flex items-center gap-2"
//                   style={{ fontWeight: 700 }}
//                 >
//                   <span>✓</span>
//                   Do's
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>
//                       Use the midnight black color scheme for primary branding
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>
//                       Maintain clear space around the logo (minimum 20px)
//                     </span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>Use monochrome versions on complex backgrounds</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>Scale proportionally to maintain aspect ratio</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>Use simplified version for sizes below 64px</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-emerald-600 mt-1">✓</span>
//                     <span>Ensure sufficient contrast with background</span>
//                   </li>
//                 </ul>
//               </div>

//               {/* Don'ts */}
//               <div>
//                 <h3
//                   className="text-2xl text-red-600 mb-4 flex items-center gap-2"
//                   style={{ fontWeight: 700 }}
//                 >
//                   <span>✕</span>
//                   Don'ts
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't change the color scheme arbitrarily</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't distort or stretch the logo</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't add effects like drop shadows or outlines</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't rotate or skew the logo</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't place on busy or low-contrast backgrounds</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-red-600 mt-1">✕</span>
//                     <span>Don't recreate or modify the logo elements</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-8 bg-gray-100 rounded-xl p-6">
//               <h4
//                 className="text-gray-900 mb-3 flex items-center gap-2"
//                 style={{ fontWeight: 700 }}
//               >
//                 <span className="text-gray-600">📏</span>
//                 Minimum Sizes
//               </h4>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                 <div>
//                   <p className="text-gray-900" style={{ fontWeight: 600 }}>
//                     Print
//                   </p>
//                   <p className="text-gray-600">15mm width</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-900" style={{ fontWeight: 600 }}>
//                     Digital
//                   </p>
//                   <p className="text-gray-600">32px width</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-900" style={{ fontWeight: 600 }}>
//                     Favicon
//                   </p>
//                   <p className="text-gray-600">16px width</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-900" style={{ fontWeight: 600 }}>
//                     App Icon
//                   </p>
//                   <p className="text-gray-600">180px width</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* File Formats & Exports */}
//         <section>
//           <h2
//             className="text-4xl text-gray-900 mb-8"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             File Formats & Export Specifications
//           </h2>
//           <div className="bg-white rounded-3xl shadow-2xl p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-blue-50 rounded-xl p-6">
//                 <h3
//                   className="text-xl text-gray-900 mb-4 flex items-center gap-2"
//                   style={{ fontWeight: 700 }}
//                 >
//                   <span className="text-blue-600">🖼️</span>
//                   Web & Digital
//                 </h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-mono">
//                       PNG
//                     </span>
//                     <span>Transparent background, 72-300 DPI</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-mono">
//                       SVG
//                     </span>
//                     <span>Vector format, scalable</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-mono">
//                       WebP
//                     </span>
//                     <span>Optimized for web performance</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-mono">
//                       ICO
//                     </span>
//                     <span>Favicon format (16x16, 32x32, 64x64)</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-purple-50 rounded-xl p-6">
//                 <h3
//                   className="text-xl text-gray-900 mb-4 flex items-center gap-2"
//                   style={{ fontWeight: 700 }}
//                 >
//                   <span className="text-purple-600">🖨️</span>
//                   Print & Production
//                 </h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-mono">
//                       PDF
//                     </span>
//                     <span>Vector format, CMYK color mode</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-mono">
//                       EPS
//                     </span>
//                     <span>Vector format for professional printing</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-mono">
//                       AI
//                     </span>
//                     <span>Adobe Illustrator editable format</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-mono">
//                       TIFF
//                     </span>
//                     <span>High-resolution raster, 300 DPI</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-8 bg-amber-50 rounded-xl p-6">
//               <h3
//                 className="text-xl text-gray-900 mb-4 flex items-center gap-2"
//                 style={{ fontWeight: 700 }}
//               >
//                 <span className="text-amber-600">📱</span>
//                 Mobile App Assets
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>
//                     iOS Requirements
//                   </p>
//                   <ul className="space-y-1 text-sm text-gray-700">
//                     <li>• App Icon: 1024×1024px PNG (no alpha)</li>
//                     <li>• Launch Screen: 1242×2688px PNG</li>
//                     <li>• Tab Bar Icons: 75×75px @3x PNG</li>
//                     <li>• Notification Icon: 60×60px @3x PNG</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <p className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>
//                     Android Requirements
//                   </p>
//                   <ul className="space-y-1 text-sm text-gray-700">
//                     <li>
//                       • Adaptive Icon: 512×512px PNG (foreground + background)
//                     </li>
//                     <li>• Legacy Icon: 512×512px PNG</li>
//                     <li>
//                       • Notification Icon: 96×96px PNG (white on transparent)
//                     </li>
//                     <li>• Feature Graphic: 1024×500px PNG</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-16 mt-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-6">
//             <MosqueIcon
//               size={80}
//               color="#D4AF37"
//               className="mx-auto opacity-90"
//             />
//           </div>
//           <h3
//             className="text-4xl mb-4"
//             style={{ fontFamily: 'Amiri, serif', fontWeight: 700 }}
//           >
//             Complete Logo System
//           </h3>
//           <p
//             className="text-xl text-gray-300 mb-3"
//             style={{ fontFamily: 'Scheherazade New, serif' }}
//           >
//             نظام شعار كامل
//           </p>
//           <p className="text-lg text-gray-400 mb-8">
//             All sizes, formats, and variations ready for implementation
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 text-sm">
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               Favicons (16px-180px)
//             </span>
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               App Icons (iOS & Android)
//             </span>
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               6 Color Variations
//             </span>
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               Monochrome Versions
//             </span>
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               Text Lockups
//             </span>
//             <span className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
//               Usage Guidelines
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
