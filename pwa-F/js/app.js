window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      console.log('Service worker register success', reg)
    } catch (e) {
      console.log('Service worker register fail')
    }
  }

 // await schedule() //расписание
})

/*
async function schedule() {
  //const res = await fetch('http://salsafiesta.ru/cool/article/')
  const data = await res.json()

  //const container = document.querySelector('#posts')
  container.innerHTML = data.map(toCard).join('\n')
}

/*function toCard(post) {
  return `
    <div class="card">
      <div class="card-title">
        ${post.title}
      </div>
      <div class="card-body">
        ${post.body}
      </div>
    </div>
  `
}*/


