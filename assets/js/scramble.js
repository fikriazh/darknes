// TextScramble

class TextScramble {
    constructor(el) {
    this.el = el
    this.chars = 'qazwsxedcrfvtgbyhnujmikolp1234567890`~!@#$%^&*()_+=-'
    this.update = this.update.bind(this)
    }
    setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 50)
      const end = start + Math.floor(Math.random() * 50)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
    }
    update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.3) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
    }
    randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
    }
    
    // Example
    
    const phrases = [
    'Mahasemesta',    
    'Hipnoterapi',
    'Life Regression',
    'Mesmerism',
    'Soul Healing',
    'Meditasi'
    
    ]
    
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    
    let counter = 0
    const next = () => {
    fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 7500)
    })
    counter = (counter + 1) % phrases.length
    }
    
    next()