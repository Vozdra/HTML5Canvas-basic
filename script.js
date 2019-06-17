window.onload = function() {
  const theCanvas1 = document.getElementById('cns-1')
  if(theCanvas1 && theCanvas1.getContext) {
    const ctx = theCanvas1.getContext('2d')
    if (ctx) {

      for(let i=0; i<10; i++) {
        ctx.beginPath()
        ctx.lineWidth = i+1
        ctx.moveTo(25, 25+i*15)
        ctx.lineTo(475, 25+i*15)
        ctx.stroke()
      }
      
    }
  }

  const theCanvas2 = document.getElementById('cns-2')
  if(theCanvas2 && theCanvas2.getContext) {
    const ctx = theCanvas2.getContext('2d')
    if (ctx) {

      ctx.strokeStyle = 'red'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(50, 25)
      ctx.lineTo(50, 175)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(450, 25)
      ctx.lineTo(450, 175)
      ctx.stroke()

      ctx.lineWidth = 25
      ctx.strokeStyle = 'black'

      ctx.lineCap = 'butt'
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(450, 50)
      ctx.stroke()

      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(50, 100)
      ctx.lineTo(450, 100)
      ctx.stroke()

      ctx.lineCap = 'square'
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.lineTo(450, 150)
      ctx.stroke()
      
    }
  }

  const theCanvas3 = document.getElementById('cns-3')
  if(theCanvas3 && theCanvas3.getContext) {
    const ctx = theCanvas3.getContext('2d')
    if (ctx) {
      ctx.lineWidth = 15
      ctx.strokeStyle = 'black'

      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(25, 150)
      ctx.lineTo(75, 50)
      ctx.lineTo(125, 150)
      ctx.stroke()

      ctx.lineJoin = 'bevel'
      ctx.beginPath()
      ctx.moveTo(175, 150)
      ctx.lineTo(225, 50)
      ctx.lineTo(275, 150)
      ctx.stroke()

      ctx.lineJoin = 'miter'
      ctx.beginPath()
      ctx.moveTo(325, 150)
      ctx.lineTo(375, 50)
      ctx.lineTo(425, 150)
      ctx.stroke()
    }
  }

  const theCanvas4 = document.getElementById('cns-4')
  if(theCanvas4 && theCanvas4.getContext) {
    let ctx = theCanvas4.getContext('2d')

    if (ctx) {
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'yellow'
      ctx.lineWidth = 10
      ctx.fillRect(25,25,100,125)
      ctx.strokeRect(25,25,100,125)

      ctx.save()

      ctx.strokeStyle = 'black'
      ctx.fillStyle = 'lightBlue'
      ctx.lineWidth = 5
      ctx.fillRect(175,25,100,125)
      ctx.strokeRect(175,25,100,125)

      ctx.restore()

      ctx.fillRect(325,25,100,125)
      ctx.strokeRect(325,25,100,125)
    }

  }

  const theCanvas5 = document.getElementById('cns-5')
  if(theCanvas5 && theCanvas5.getContext) {
    let ctx = theCanvas5.getContext('2d')

    if (ctx) {
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'yellow'
      ctx.lineWidth = 5

      ctx.beginPath()
      ctx.moveTo(25,175)
      ctx.lineTo(50,25)
      ctx.lineTo(100,50)
      ctx.lineTo(125,175)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(175,175)
      ctx.lineTo(200,25)
      ctx.lineTo(250,50)
      ctx.lineTo(275,175)
      ctx.closePath()
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(325,175)
      ctx.lineTo(350,25)
      ctx.lineTo(400,50)
      ctx.lineTo(425,175)
      ctx.fill()
      ctx.stroke()
    }
  
  }

  const theCanvas6 = document.getElementById('cns-6')
  if(theCanvas6 && theCanvas6.getContext) {
    let ctx = theCanvas6.getContext('2d')
    if(ctx) {
      ctx.strokeStyle = 'green'
      ctx.lineWidth = 5
      ctx.fillStyle = 'lilghtGreen'

      ctx.beginPath()
      ctx.arc(90, 150, 70, 1.5*Math.PI, 2*Math.PI)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(230, 150, 70, 0, 1.5*Math.PI)
      ctx.stroke()

      ctx.beginPath()
      let deg = 360
      let rad = (Math.PI/180) * deg
      ctx.arc(370, 150, 70, 0, rad)
      ctx.fill()
      ctx.stroke()
    }

  }

  const theCanvas7 = document.getElementById('cns-7')
  if(theCanvas7 && theCanvas7.getContext) {
    let ctx = theCanvas7.getContext('2d')
    if(ctx) {

      ctx.strokeStyle = 'yellow'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.bezierCurveTo(75,200,175,25,215,150)
      ctx.stroke()

      ctx.strokeStyle = 'rgba(0,0,20, .1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(50,150)
      ctx.lineTo(75,200)
      ctx.lineTo(175,25)
      ctx.lineTo(215,150)
      ctx.stroke()

      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(250,190)
      ctx.quadraticCurveTo(275,20,455,200)
      ctx.stroke()

      ctx.strokeStyle = 'rgba(0,0,20, .1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(250,190)
      ctx.lineTo(275,20)
      ctx.lineTo(455,200)
      ctx.stroke()

    }
  }

  const theCanvas8 = document.getElementById('cns-8')
  if(theCanvas8 && theCanvas8.getContext) {
    let ctx = theCanvas8.getContext('2d')
    if(ctx) {
      let theString = 'Текст внутри Canvas'
      ctx.fillText(theString, 20,20)

      ctx.font = '25pt Roboto'
      ctx.fillText(theString, 20,60)

      ctx.fillStyle = 'blue'
      ctx.font = '25pt Georgia'
      ctx.fillText(theString, 20,100)

      ctx.font = '32pt Verdana'
      // ctx.textBaseline = 'middle'
      ctx.fillStyle = 'yellow'
      ctx.strokeStyle = 'rgba(0,0,0,.5)'
      ctx.fillText(theString, 20,160)
      ctx.strokeText(theString, 20,160)

      let textW = ctx.measureText(theString)
      ctx.beginPath()
      ctx.strokeStyle = 'red'
      ctx.moveTo(20,170)
      ctx.lineTo(textW.width, 170)
      ctx.stroke()
    }
  }

  const theCanvas9 = document.getElementById('cns-9')
  if(theCanvas9 && theCanvas9.getContext) {
    let ctx = theCanvas9.getContext('2d')
    if(ctx) {
      ctx.shadowColor = '#000000'
      ctx.shadowOffsetX = 10
      ctx.shadowOffsetY = 10
      ctx.shadowBlur = 10

      ctx.fillStyle = 'lightBlue'
      ctx.fillRect(20,20,100,60)

      let theString = 'Текст внутри Canvas'
      ctx.fillStyle = 'green'
      ctx.shadowColor = 'rgba(0,100,100, 0.5)'
      ctx.shadowOffsetX = 5
      ctx.shadowOffsetY = 5
      ctx.shadowBlur = 5
      ctx.font = '25pt Roboto'
      ctx.fillText(theString, 150, 75)

      ctx.lineWidth = 25
      ctx.strokeStyle = 'rgba(150,0,150, .5)'
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.lineTo(450, 150)
      ctx.shadowColor = 'rgba(250,200,100, .9)'
      ctx.shadowOffsetX = -7
      ctx.shadowOffsetY = -7
      ctx.shadowBlur = 10
      ctx.stroke()
    }
  }

  const theCanvas10 = document.getElementById('cns-10')
  if(theCanvas10 && theCanvas10.getContext) {
    let ctx = theCanvas10.getContext('2d')
    if(ctx) {
      let img = new Image()
      img.onload = function() {
        ctx.fillStyle = ctx.createPattern(img, 'repeat')
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
      }
      img.src = 'cat.jpeg'
    }
  }

  const theCanvas11 = document.getElementById('cns-11')
  if(theCanvas11 && theCanvas11.getContext) {
    let ctx = theCanvas11.getContext('2d')
    if(ctx) {
      setTimeout(function() {
        let video = document.getElementById('vidEl')
        let videoPattern = ctx.createPattern(video, 'repeat')
        ctx.fillStyle = videoPattern
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
      },2000)
    }

  }

  const theCanvas12 = document.getElementById('cns-12')
  if(theCanvas12 && theCanvas12.getContext) {
    let ctx = theCanvas12.getContext('2d')
    if(ctx) {
      let cnsPat = document.getElementById('cns-pat')
      let cnsPatCtx = cnsPat.getContext('2d')
      cnsPatCtx.strokeStyle = 'red'
      cnsPatCtx.lineWidth = 1
      cnsPatCtx.beginPath()
      cnsPatCtx.moveTo(0,0)
      cnsPatCtx.lineTo(25,25)
      cnsPatCtx.stroke()

      let strokePattern = ctx.createPattern(cnsPat, 'repeat')
      ctx.strokeStyle = strokePattern
      ctx.lineWidth = 25
      ctx.strokeRect(50,50,200,200)
    }

  }

  const theCanvas13 = document.getElementById('cns-13')
  if(theCanvas13 && theCanvas13.getContext) {
    let ctx = theCanvas13.getContext('2d')
    if(ctx) {
      let linGrad1 = ctx.createLinearGradient(20,20,20,200)
      linGrad1.addColorStop(0, 'yellow')
      linGrad1.addColorStop(0.5, 'yellow')
      linGrad1.addColorStop(0.5, 'blue')
      linGrad1.addColorStop(1, 'blue')
      ctx.fillStyle = linGrad1
      ctx.fillRect(20,20,100,200)

      let linGrad2 = ctx.createLinearGradient(130,20,130,200)
      linGrad2.addColorStop(0, '#d03')
      linGrad2.addColorStop(0.5, '#df3')
      linGrad2.addColorStop(1, '#0df')
      ctx.fillStyle = linGrad2
      ctx.fillRect(130,20,100,200)

      let linGrad3 = ctx.createLinearGradient(240,20,340,220)
      linGrad3.addColorStop(0, '#d03')
      linGrad3.addColorStop(0.5, '#df3')
      linGrad3.addColorStop(1, '#0df')
      ctx.fillStyle = linGrad3
      ctx.fillRect(240,20,100,200)

      let RadGrad = ctx.createRadialGradient(420,70,20,420,70,50)
      RadGrad.addColorStop(0, '#d03')
      RadGrad.addColorStop(0.5, '#df3')
      RadGrad.addColorStop(1, '#0df')
      ctx.fillStyle = RadGrad
      ctx.beginPath()
      ctx.arc(420,70,50,0,2*Math.PI)
      ctx.stroke()
      ctx.fill()

      let RadGrad2 = ctx.createRadialGradient(400,160,10,420,180,50)
      RadGrad2.addColorStop(0, '#d50')
      RadGrad2.addColorStop(0.5, '#df3')
      RadGrad2.addColorStop(1, '#0df')
      ctx.fillStyle = RadGrad2
      ctx.beginPath()
      ctx.arc(420,180,50,0,2*Math.PI)
      ctx.stroke()
      ctx.fill()
    }
  }

  const theCanvas14 = document.getElementById('cns-14')
  if(theCanvas14 && theCanvas14.getContext) {
    let ctx = theCanvas14.getContext('2d')
    if(ctx) {
      let img = document.getElementById('cat-img')
      ctx.arc(ctx.canvas.width/2,ctx.canvas.height/2,120,0,2*Math.PI)
      ctx.clip()
      ctx.drawImage(img, 0, 0)
    }
  }

  const theCanvas15 = document.getElementById('cns-15')
  if(theCanvas15 && theCanvas15.getContext) {
    let ctx = theCanvas15.getContext('2d')
    if(ctx) {
      let img = document.getElementById('cat-img')

      ctx.beginPath()
      ctx.moveTo(120,50)
      ctx.lineTo(70, 250)
      ctx.lineTo(390, 290)
      ctx.lineTo(350, 80)
      ctx.closePath()
      ctx.clip()
      ctx.drawImage(img, 0, 0)
    }
  }

  const theCanvas16 = document.getElementById('cns-16')
  if(theCanvas16 && theCanvas16.getContext) {
    let ctx = theCanvas16.getContext('2d')
    if(ctx) {
      let img = document.getElementById('bear-img')
      ctx.drawImage(img,20,20,250,175)

      let imgCat = document.getElementById('cat-img')
      ctx.drawImage(imgCat,190,30,190,105)

      let imgCat1 = document.getElementById('cat1-img')
      ctx.drawImage(imgCat1,40,20,60,60,140,22,60,60)
    }
  }

  const theCanvas17 = document.getElementById('cns-17')
  if(theCanvas17 && theCanvas17.getContext) {
    let ctx = theCanvas17.getContext('2d')
    if(ctx) {
      setInterval(function(){
        const theCanvas17 = document.getElementById('cns-17')
        let ctx = theCanvas17.getContext('2d')
        let vid = document.getElementById('vidEl-1')
        ctx.drawImage(vid, 0,0)
      },16)
    }
  }

  const theCanvas18 = document.getElementById('cns-18')
  if(theCanvas18 && theCanvas18.getContext) {
    let ctx = theCanvas18.getContext('2d')
    if(ctx) {
      ctx.fillStyle = 'green'
      ctx.fillRect(0,0,100,60)

      ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)

      ctx.fillRect(0,0,100,60)
    }
  }

  const theCanvas19 = document.getElementById('cns-19')
  if(theCanvas19 && theCanvas19.getContext) {
    let ctx = theCanvas19.getContext('2d')
    if(ctx) {
      ctx.fillStyle = 'yellow'
      ctx.fillRect(0,0,100,40)

      ctx.save()
      ctx.scale(1.5,2)
      ctx.fillStyle = 'green'
      ctx.fillRect(150,0,100,40)
      ctx.restore()

      ctx.scale(0.5,0.5)
      ctx.fillStyle = 'blue'
      ctx.fillRect(100,0,100,40)
    }
  }

  const theCanvas20 = document.getElementById('cns-20')
  if(theCanvas20 && theCanvas20.getContext) {
    let ctx = theCanvas20.getContext('2d')
    let lineColors = ['red','orange','yellow','green','lightBlue','blue','purple']
    if(ctx) {
      ctx.fillStyle = 'yellow'
      ctx.fillRect(50,30,100,50)

      ctx.save()
      ctx.rotate(.5)
      ctx.fillStyle = 'green'
      ctx.fillRect(50,30,100,50)
      ctx.restore()

      ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
      let rad = (Math.PI/180) * 20
      let i = 0
      for(let deg=0; deg<180; deg+=20){
        (i>6) ? i=0 : null
        ctx.rotate(rad)
        ctx.beginPath()
        ctx.moveTo(-100,0)
        ctx.lineTo(100,0)
        ctx.strokeStyle = lineColors[i]
        ctx.stroke()
        i++
      }
    }
  }

  const theCanvas21 = document.getElementById('cns-21')
  if(theCanvas21 && theCanvas21.getContext) {
    let ctx = theCanvas21.getContext('2d')
    if(ctx) {
      ctx.fillStyle = 'blue'
      ctx.fillRect(0,0,100,50)

      // 1 0 tx
      // 0 1 ty
      // 0 0 1
      ctx.fillStyle = 'yellow'
      let tx = ctx.canvas.width / 2
      let ty = ctx.canvas.height / 2
      ctx.transform(1,0,0,1,tx,ty)
      ctx.fillRect(0,0,100,50)
      ctx.transform(1,0,0,1,-tx,-ty)

      // 1 sx 0
      // sy 1 0
      // 0 0 1
      ctx.fillStyle = 'green'
      let sx = 1.2
      let sy = 0
      ctx.setTransform(1,sy,sx,1,0,0)
      ctx.fillRect(150,0,100,50)

      ctx.fillStyle = 'purple'
      let sx2 = 0
      let sy2 = 0.5
      ctx.setTransform(1,sy2,sx2,1,0,0)
      ctx.fillRect(0,100,100,50)
    }
  }

  const theCanvas22 = document.getElementById('cns-22')
  if(theCanvas22 && theCanvas22.getContext) {
    let ctx = theCanvas22.getContext('2d')
    if(ctx) {
      ctx.globalAlpha = 1.0 //default

      let rects = [
        {x: 10, y: 10, width: 75, height: 75},
        {x: 30, y: 40, width: 75, height: 75},
        {x: 140, y: 10, width: 75, height: 75},
        {x: 160, y: 40, width: 75, height: 75},
        {x: 270, y: 10, width: 75, height: 75},
        {x: 290, y: 40, width: 75, height: 75},
        {x: 400, y: 10, width: 75, height: 75},
        {x: 420, y: 40, width: 75, height: 75}
      ]

      for(let i = 0; i<rects.length; i+=2) {
        ctx.fillStyle = 'yellow'
        ctx.fillRect(rects[i].x,rects[i].y,rects[i].width,rects[i].height)
        ctx.fillStyle = 'blue'
        ctx.fillRect(rects[i+1].x,rects[i+1].y,rects[i].width,rects[i].height)
        ctx.globalAlpha -= 0.3
      }

    }
  }

}