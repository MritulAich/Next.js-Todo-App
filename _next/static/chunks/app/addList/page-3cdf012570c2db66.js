(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{6498:(e,t,a)=>{Promise.resolve().then(a.bind(a,1835))},1835:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var s=a(7437),r=a(2265),d=a(1169),n=a(998);function l(e){let{children:t}=e,{data:a,status:s}=(0,n.useSession)(),l=(0,d.useRouter)();return(0,r.useEffect)(()=>{"loading"===s||a||l.push("/login")},[a,s,l]),t}let u=function(){let[e,t]=(0,r.useState)(""),[a,d]=(0,r.useState)(""),[n,u]=(0,r.useState)(""),o=async()=>{if(!e||!a){u("Enter a task and a date.");return}try{(await fetch("/api/task",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:e,date:a})})).ok?(u("Task added successfully!"),t(""),d(""),console.log(e,a)):u("Failed to add task.")}catch(e){u("An error occurred. Please try again.")}};return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"max-w-md mx-auto mt-8",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("input",{type:"date",value:a,onChange:e=>d(e.target.value),className:"border p-2 w-full rounded mb-4",required:!0}),(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Add a new task",className:"border p-2 w-full rounded mb-4",required:!0}),(0,s.jsx)("button",{onClick:o,className:"bg-blue-500 text-white p-2 rounded w-full",children:"Add Task"})]}),n&&(0,s.jsx)("p",{className:"mt-4 text-center text-sm text-red-500",children:n})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[998,130,215,744],()=>t(6498)),_N_E=e.O()}]);