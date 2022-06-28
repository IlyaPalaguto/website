const originalHTmlText = document.querySelectorAll('.myClass')
const coloringBack = new Array
originalHTmlText.forEach((index, val) => {
    let i = 0
    let auxForTxt = ''
    while (index.textContent[i]) {
        switch (index.textContent[i]) {
            case '<':
                auxForTxt = auxForTxt.concat('&lt;')
                i += 1
            break

            case '>':
                auxForTxt = auxForTxt.concat('&gt;')
                i += 1
            break

            default:
                auxForTxt = auxForTxt.concat(index.textContent[i])
                i += 1
            break
        }
    }
    coloringBack[val] = auxForTxt
})

const removeChanges = () => {
    originalHTmlText.forEach((index, val) => {
        index.innerHTML = coloringBack[val]
    })
}

const coloringAll = () => {
    const checkTypeOfTxt = document.querySelectorAll(".myClass")
    checkTypeOfTxt.forEach((index, val) => {
        if (index.textContent[0] === '<') {
            let i = 0
            let whatsElement = ''

            while (i < index.textContent.indexOf('>')) {
                whatsElement = whatsElement.concat(index.textContent[i])
                i += 1
            }

            whatsElement = whatsElement.concat(index.textContent[i])

            if (whatsElement === '<script>') {
                coloringJS(index.textContent)
            } else {
                coloringHTml(index.textContent)
            }
            
        } else {
            coloringCss(index.textContent)
        }
    })
}

const coloringCss = (originalText) => {
    const brown = '<code class="someBrown">'
    const red = '<code class="someRed">'
    const green = '<code class="someGreen">'
    const blue = '<code class="someBlue">'
    const purple = '<code class="somePurple">'
    const endCode = '</code>'
    // const originalText = document.querySelectorAll(".myClass")[where].textContent

    let editedText = ''
    let i = 0
    let z
    let aux
    let aux1

    if (originalText[i] !== '@') {
        editedText = editedText.concat(brown)
    }
    while (originalText[i]) {
        switch (originalText[i]) {
            case '@':
                if (i !== 0) {
                    editedText = editedText.concat(endCode)
                }
                editedText = editedText.concat(purple)
                while (originalText[i] !== ' '){
                    editedText = editedText.concat(originalText[i])
                    i += 1
                }
                editedText = editedText.concat(endCode)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(blue)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
                aux = originalText.indexOf(')', i)
                while (i < aux) {
                    editedText = editedText.concat(originalText[i])
                    i += 1
                }
                editedText = editedText.concat(blue)
                editedText = editedText.concat(originalText[i])
                i += 1
            break
    
            case '{': 
                editedText = editedText.concat(endCode)
                editedText = editedText.concat(blue)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
    
                aux = originalText.indexOf('{',i)
                aux1 = originalText.indexOf('}',i)
    
                if (aux < aux1 && aux !== -1) {
                    editedText = editedText.concat(brown)
                } else {
                    editedText = editedText.concat(red)
                }
            break
    
            case '}':
                editedText = editedText.concat(endCode)
                editedText = editedText.concat(blue)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
                editedText = editedText.concat(brown)
            break
    
            case ':':
                z = i + 1
                if (originalText[z] === ' ') {
                    editedText = editedText.concat(endCode)
                    editedText = editedText.concat(originalText[i])
                    i += 1
                    editedText = editedText.concat(green)
                } else {
                    editedText = editedText.concat(originalText[i])
                    i += 1
                }
            break
    
            case ';': 
                editedText = editedText.concat(endCode)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(red)
            break
    
            default:
                editedText = editedText.concat(originalText[i])
                i += 1
            break
        }
    }
    // console.log(editedText)

    document.getElementsByClassName('myClass')[2].innerHTML = editedText
}

const coloringJS = (originalText) => {
    const brown = '<code class="someBrown">'
    const red = '<code class="someRed">'
    const black = '<code class="someBlack">'
    const blue = '<code class="someBlue">'
    const purple = '<code class="somePurple">'
    const liBlue = '<code class="someLightBlue">'
    const dirtyYellow = '<code class="someYellow">'
    const darkBlue = '<code class="someDarkBlue">'
    const green = '<code class="someGreen">'
    const hooks = '<code class="hooks">'
    const endCode = '</code>'
    // const originalText = document.getElementsByClassName("myClass")[1].textContent
    // const originalText = document.querySelectorAll(".myClass")[1].textContent
    const colonOpen = '&lt;'
    const colonClosed = '&gt;'
    const qtyConst = new Array
    const qtyLet = new Array
    const qtyIf = new Array
    const qtyWhile = new Array
    const qtySwitch = new Array
    const qtyCase = new Array
    const qtyDefault = new Array
    const qtyElse = new Array
    const qtyBreak = new Array
    const namesOfValues = new Array
    const namesOfFunc = new Array
    const qtyValues = new Array
    const qtyFunc = new Array
    const qtySlash = new Array

    let editedText = ''
    let i = 0 
    let aux = 0

    //Количество '//'
    while (qtySlash[qtySlash.length - 1] !== -1) {
        qtySlash.push(originalText.indexOf('//', aux))
        aux = qtySlash[qtySlash.length - 1] + 1
    }
    qtySlash.pop()

    //Количество const
    while (qtyConst[qtyConst.length - 1] !== -1) {
        qtyConst.push(originalText.indexOf('const', aux))
        aux = qtyConst[qtyConst.length - 1] + 1
    }
    qtyConst.pop()

    //Количество let
    while (qtyLet[qtyLet.length - 1] !== -1) {
        qtyLet.push(originalText.indexOf('let', aux))
        aux = qtyLet[qtyLet.length - 1] + 1
    }
    qtyLet.pop()

    //Количество if
    while (qtyIf[qtyIf.length - 1] !== -1) {
        qtyIf.push(originalText.indexOf('if', aux))
        aux = qtyIf[qtyIf.length - 1] + 1
    }
    qtyIf.pop()

    //Количество while
    while (qtyWhile[qtyWhile.length - 1] !== -1) {
        qtyWhile.push(originalText.indexOf('while', aux))
        aux = qtyWhile[qtyWhile.length - 1] + 1
    }
    qtyWhile.pop()

    //Количество switch
    while (qtySwitch[qtySwitch.length - 1] !== -1) {
        qtySwitch.push(originalText.indexOf('switch', aux))
        aux = qtySwitch[qtySwitch.length - 1] + 1
    }
    qtySwitch.pop()

    //Количество case
    while (qtyCase[qtyCase.length - 1] !== -1) {
        qtyCase.push(originalText.indexOf('case', aux))
        aux = qtyCase[qtyCase.length - 1] + 1
    }
    qtyCase.pop()
    
    //Количество default
    while (qtyDefault[qtyDefault.length - 1] !== -1) {
        qtyDefault.push(originalText.indexOf('default', aux))
        aux = qtyDefault[qtyDefault.length - 1] + 1
    }
    qtyDefault.pop()

    //Количество else
    while (qtyElse[qtyElse.length - 1] !== -1) {
        qtyElse.push(originalText.indexOf('else', aux))
        aux = qtyElse[qtyElse.length - 1] + 1
    }
    qtyElse.pop()

    //Количество break
    while (qtyBreak[qtyBreak.length - 1] !== -1) {
        qtyBreak.push(originalText.indexOf('break', aux))
        aux = qtyBreak[qtyBreak.length - 1] + 1
    }
    qtyBreak.pop()

    //Названия переменных
    qtyConst.forEach(index => {
        aux = index + 6
        namesOfValues.push('')
        while (originalText[aux] !== ' ') {
            namesOfValues[namesOfValues.length - 1] += originalText[aux]
            aux += 1
        }
    })

    //Распределение функций и значений в разные массивы namesOfFunc и namesOfValues
    namesOfValues.forEach((index, value) => {
        aux = originalText.indexOf(index)
        aux = aux + index.length + 3
        if (originalText[aux] === '(') {
            namesOfFunc[namesOfFunc.length] = namesOfValues[value]
            namesOfValues.splice(value, 1)   
        }
    })

    //Количество значений всех переменных объявленных через const
    namesOfValues.forEach(index => {
        aux = 1
        qtyValues.push(new Array)
        while (aux !== 0) {
            qtyValues[qtyValues.length - 1].push(originalText.indexOf(index, aux))
            aux = qtyValues[qtyValues.length - 1][qtyValues[qtyValues.length - 1].length - 1]
            aux += 1
        }
    })

    //Количество значений всех функций объявленных через const
    namesOfFunc.forEach(index => {
        aux = 1
        qtyFunc.push(new Array)
        while (aux !== 0) {
            qtyFunc[qtyFunc.length - 1].push(originalText.indexOf(index, aux))
            aux = qtyFunc[qtyFunc.length - 1][qtyFunc[qtyFunc.length - 1].length - 1]
            aux += 1
        }
    })


    while(originalText[i]) {
        switch (originalText[i]) {

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                editedText = editedText.concat(green)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
            break

            case ' ':
            case '\n':
                editedText = editedText.concat(originalText[i])
                i += 1
            break

            case '!':
            case '+':
            case ':':
            case ';':
            case '.':
                editedText = editedText.concat(black)
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
            break

            case ']':
            case ')':
            case '}':
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
            break

            case '[':
            case '(':
            case '{':
                editedText = editedText.concat(hooks)
                editedText = editedText.concat(originalText[i])
                i += 1
            break

            case '=':
                aux = i + 1
                if(originalText[aux] === '>') {
                    editedText = editedText.concat(blue)
                    editedText = editedText.concat(originalText[i])
                    i += 1
                    editedText = editedText.concat(originalText[i])
                    i += 1
                    editedText = editedText.concat(endCode)
                } else {
                    editedText = editedText.concat(black)
                    editedText = editedText.concat(originalText[i])
                    i += 1
                    editedText = editedText.concat(endCode)
                }
            break

            case '>':
                editedText = editedText.concat(black)
                editedText = editedText.concat(colonClosed)
                i += 1
                editedText = editedText.concat(endCode)
            break

            case '<':
                if (originalText.indexOf(' ', i) < originalText.indexOf('>', i) && originalText.indexOf('>', i) !== 0) {
                    editedText = editedText.concat(black)
                    editedText = editedText.concat(colonOpen)
                    i += 1
                    editedText = editedText.concat(endCode)    
                } else {
                    editedText = editedText.concat(brown)
                    editedText = editedText.concat(colonOpen)
                    i += 1
                    aux = originalText.indexOf('>',i)
                    
                    while(i < aux) {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(colonClosed)
                    i += 1
                    editedText = editedText.concat(endCode)
                }
            break

            case '"':
            case '`':
            case "'":
                aux = originalText[i]
                editedText = editedText.concat(red)
                editedText = editedText.concat(originalText[i])
                i += 1
                aux = originalText.indexOf(aux, i)
                while(i < aux) {
                    switch (originalText[i]) {
                        case '<':
                            editedText = editedText.concat(colonOpen)
                            i += 1
                        break
                        case '>':
                            editedText = editedText.concat(colonClosed)
                            i += 1
                        break
                        default:
                            editedText = editedText.concat(originalText[i])
                            i += 1
                        break
                    }
                }
                editedText = editedText.concat(originalText[i])
                i += 1
                editedText = editedText.concat(endCode)
            break

            default:
                aux = undefined

                qtySlash.forEach(index => {
                    if (index === i) {
                        return aux = 'it slash'
                    } 
                })

                qtyIf.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyBreak.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyCase.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyDefault.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyElse.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtySwitch.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyWhile.forEach(index => {
                    if (index === i) {
                        return aux = 'it purple'
                    } 
                })

                qtyConst.forEach(index => {
                    if (index === i) {
                        return aux = 'it var'
                    } 
                })

                qtyLet.forEach(index => {
                    if (index === i) {
                        return aux = 'it var'
                    } 
                })

                qtyValues.forEach(index => {
                    index.forEach(ind => {
                        if (ind === i) {
                            aux = 'it value'
                        }
                    })
                })

                qtyFunc.forEach(index => {
                    index.forEach(ind => {
                        if (ind === i) {
                            aux = 'it function'
                        }
                    })
                })

                if (aux === 'it value') {
                    editedText = editedText.concat(liBlue)
                    while (originalText[i] !== ' ' && originalText[i] !== '.' && originalText[i] !== ')' && originalText[i] !== '[') {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(endCode)                  
                } else if (aux === 'it function') {
                    editedText = editedText.concat(dirtyYellow)
                    while (originalText[i] !== ' ' && originalText[i] !== '(') {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(endCode)
                } else if (aux === 'it slash') {
                    editedText = editedText.concat(green)
                    while (originalText[i] !== '\n') {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(endCode)
                } else if (aux === 'it purple') {
                    editedText = editedText.concat(purple)
                    while (originalText[i] !== ' ' && originalText[i] !== '(') {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(endCode)
                } else if (aux === 'it var') {
                    editedText = editedText.concat(blue)
                    while (originalText[i] !== ' ') {
                        editedText = editedText.concat(originalText[i])
                        i += 1
                    }
                    editedText = editedText.concat(endCode)
                } else {
                        let varOrFunc = ''
                        while (originalText[i] !== '.' && originalText[i] !== ';' && originalText[i] !== ' ' && originalText[i] !== '(' && originalText[i] !== ')' && originalText[i] !== '[' && originalText[i] !== ']' && originalText[i] !== '\n')  {
                            varOrFunc = varOrFunc.concat(originalText[i])
                            i += 1
                        }
                        if (originalText[i] === '(') {
                            editedText = editedText.concat(dirtyYellow)
                            editedText = editedText.concat(varOrFunc)
                            editedText = editedText.concat(endCode)
                        } else {
                            editedText = editedText.concat(darkBlue)
                            editedText = editedText.concat(varOrFunc)
                            editedText = editedText.concat(endCode)
                        }
                }
                break
        }
    }
    // console.log(editedText)
    document.getElementsByClassName('myClass')[1].innerHTML = editedText
}

const coloringHTml = (originalText) => {
    // const originalText = document.querySelectorAll(".myClass")[0].textContent
    const colonOpen = '&lt;'
    const colonClosed = '&gt;'
    const brown = '<code class="someBrown">'
    const red = '<code class="someRed">'
    const black = '<code class="someBlack">'
    const blue = '<code class="someBlue">'
    const brackets = '<code class="brackets">'
    const darkBlue = '<code class="someDarkBlue">'
    const dirtyYellow = '<code class="someYellow">'
    const endCode = '</code>'
    const qtyClass = new Array
    const qtyID = new Array
    const qtyTitle = new Array
    const qtyWidth = new Array
    const qtyFrameborder = new Array
    const qtyAllow = new Array
    const qtyAllowFullScreen = new Array
    const qtyStyle = new Array
    const qtySrc = new Array
    const qtyRel = new Array
    const qtyHref = new Array
    const qtyAlt = new Array
    const qtyOnclick = new Array
    const qtyIntegrity = new Array
    const qtyCrossorigin = new Array
    const qtyQoutes = new Array
    const qtyFunc = new Array
    const abc = 'qwertyuiopasdfghjklzxcvbnm'
    const alpha = new Array

    let i = 0
    let editedText = ''
    let aux = 0

    const fillQty = (where, what) => {
        while (where[where.length - 1] !== -1) {
                where.push(originalText.indexOf(what, aux))
                aux = where[where.length - 1]
                aux += 1
        }
        where.splice(where.length - 1, 1)
        aux = 0
    }

    fillQty(qtyQoutes, '"')
    fillQty(qtyQoutes, "'")
    fillQty(qtyTitle, 'title=')
    fillQty(qtyWidth, 'width=')
    fillQty(qtyFrameborder, 'frameborder=')
    fillQty(qtyAllowFullScreen, 'allowfullscreen')
    fillQty(qtyAllow, 'allow=')
    fillQty(qtyOnclick, 'onclick=')
    fillQty(qtyClass, 'class=')
    fillQty(qtyID, 'id=')
    fillQty(qtyStyle, 'style=')
    fillQty(qtySrc, 'src=')
    fillQty(qtyRel, 'rel=')
    fillQty(qtyHref, 'href=')
    fillQty(qtyAlt, 'alt=')
    fillQty(qtyIntegrity, 'integrity=')
    fillQty(qtyCrossorigin, 'crossorigin=')

    while (aux !== -1) {
        if (originalText.indexOf('(', i) !== -1) {
            aux = originalText.indexOf('(', i)
            i = aux + 1
            qtyFunc.push('')
            while (originalText[aux - 1] !== '"' && originalText[aux - 1] !== ' ') {
                aux -= 1
                qtyFunc[qtyFunc.length - 1] = originalText[aux].concat(qtyFunc[qtyFunc.length - 1])
            }
        } else {
            aux = originalText.indexOf('(', i)
        }
    }

    qtyFunc.forEach((index, val) => {
        for (let z = 0; z < qtyFunc.length - 1; z++) {
            if (index === qtyFunc[z] && z !== val) {
                qtyFunc.splice(z, 1)
            }
        }
    })

    i = 0
    aux = 0
    
    while (originalText[i]) {
        switch (originalText[i]) {

            case '<':
                editedText = editedText.concat(brown)
                editedText = editedText.concat(colonOpen)
                i += 1
                while (i < originalText.indexOf('>', i)) {
                    switch (originalText[i]) {
                        case '(':
                            editedText = editedText.concat(brackets)
                            editedText = editedText.concat(originalText[i])
                            i += 1
                            editedText = editedText.concat(darkBlue)
                        break

                        case ')':
                            editedText = editedText.concat(endCode)
                            editedText = editedText.concat(originalText[i])
                            i += 1
                            editedText = editedText.concat(endCode)
                        break
                        case '=':
                            editedText = editedText.concat(black)
                            editedText = editedText.concat(originalText[i])
                            i += 1
                            editedText = editedText.concat(endCode)
                        break

                        
                        default:
                            let auxForFunc 
                            aux = 0

                            function auxFunc(color) {
                                for (let z = 1; z < arguments.length; z++) {
                                    arguments[z].forEach(index => {
                                        if (index === i) {
                                            aux = color
                                        }
                                    })
                                }
                            }

                            auxFunc('red', qtyAlt, qtyClass, qtyCrossorigin, qtyHref, qtyID, qtyIntegrity, qtyOnclick, qtyRel, qtySrc, qtyStyle, qtyTitle, qtyFrameborder, qtyWidth, qtyAllow, qtyAllowFullScreen)

                            qtyQoutes.forEach((index, val) => {
                                if (index === i) {
                                    if (val % 2 == 0) {
                                        aux = 'opened quote'
                                    } else {
                                        aux = 'closed quote'
                                    }
                                }
                            })

                            qtyFunc.forEach((index, val) => {
                                let z = originalText.indexOf(index, i)
                                if (z === i) {
                                    aux = 'it function'
                                    auxForFunc = val
                                }
                            })

                            switch (aux) {
                                case 'it function':
                                    editedText = editedText.concat(dirtyYellow)
                                    editedText = editedText.concat(qtyFunc[auxForFunc])
                                    i = i + qtyFunc[auxForFunc].length
                                    editedText = editedText.concat(endCode)
                                break

                                case 'opened quote':
                                    editedText = editedText.concat(blue)
                                    editedText = editedText.concat(originalText[i])
                                    i += 1
                                break

                                case 'closed quote':
                                    editedText = editedText.concat(originalText[i])
                                    i += 1
                                    editedText = editedText.concat(endCode)
                                break

                                case 'red':
                                    editedText = editedText.concat(red)
                                    while (originalText[i] !== ' ' && originalText[i] !== '=') {
                                        editedText = editedText.concat(originalText[i])
                                        i += 1
                                    }
                                    editedText = editedText.concat(endCode)
                                break

                                default:
                                    editedText = editedText.concat(originalText[i])
                                    i += 1
                                break
                            }
                        break
                    }

                }
                editedText = editedText.concat(colonClosed)
                i += 1
                editedText = editedText.concat(endCode)
            break

            default:
                editedText = editedText.concat(originalText[i])
                i += 1
            break
        }
    }
    // console.log(editedText)
    document.getElementsByClassName('myClass')[0].innerHTML = editedText

}

const trigger = () => {
    const a = document.getElementById('checker')
    if (a.checked) {
        coloringAll()
    } else {
        removeChanges()
    }
}
