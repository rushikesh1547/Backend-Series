import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url)
        if (url.pathname === '/'){
            return new Response('Hello Ice Tea', {status: 200})
        }else if (url.pathname === '/ice-tea'){
            return new Response('Ice Tea is a good option', {status: 200})
        }else {
            return new Response('404 not found', {status:404})
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
}) 
echo "# Backend-Series" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rushikesh1547/Backend-Series.git
git push -u origin main