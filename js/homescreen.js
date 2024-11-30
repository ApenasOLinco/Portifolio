/**
 * Adiciona delay a todas as animações do menu para uma experiência mais suave ao acessar a página
 */
export function delayAnimations() {
    /*=============================================
    =                  HEADER                    =
    =============================================*/
    
    const cabecalho = document.querySelector('#cabecalho')
    const rollLtrDurationSec = Number(getComputedStyle(cabecalho).getPropertyValue('--menu-roll-time').replace('s', ''))

    const headerLi = document.querySelectorAll('#cabecalho ul li')
    const rollTtbDurationSec = Number(getComputedStyle(headerLi[0]).getPropertyValue('--roll-ttb-duration').replace('s', ''))

    const factor = .1
    
    for(let i = 0; i < headerLi.length; i++) {
        const currentLi = headerLi.item(i)
        const delay = rollLtrDurationSec + factor * i
        console.log("🚀 ~ loadAnimations ~ time:", delay)
        currentLi.style.animationDelay = `${delay}s`
    }
    
    /*=============================================
    =                   BANNER                    =
    =============================================*/
    
    const totalMenuAnimationDurationSec = rollLtrDurationSec + rollTtbDurationSec + factor * headerLi.length
    const banner = document.querySelector('#banner')
    const bannerAppearDuration = Number(getComputedStyle(banner).getPropertyValue('--appearDuration').replace('s', ''))
    banner.style.animationDelay = `${totalMenuAnimationDurationSec}s`
    
    /* BANNER IMG */
    const bannerImg = document.querySelector('#banner img')
    bannerImg.style.transition = `filter ${bannerAppearDuration}s ease-out`
    setTimeout(() => bannerImg.classList.add('blurry'), (bannerAppearDuration + totalMenuAnimationDurationSec) * 1000)
}