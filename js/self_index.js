
$('#closeAlert').click(() => {
    $('#alertWindow').addClass('--close');
    $('body').removeClass('--noscroll');
})

// 開關子選單 & 更動網址列
let subState = false;
let subMove = true;
$('#toService').click(function(){
    subState = $(this).hasClass('--active');
    $('#toProtection').removeClass('--active');
    if(subMove){ $(this).toggleClass('--active');}
})
$('#toProtection').click(function(){
    subState = $(this).hasClass('--active');
    $('#toService').removeClass('--active');
    if(subMove){ $(this).toggleClass('--active');}   
})
$('.routerHref').click(function(){
    $('#header').removeClass('--open');
    $('#toService,#toProtection').removeClass('--active');
    location = $(this).attr('data-href');
})
$('#toService li,#toProtection li').mouseenter(()=>{ subMove = false;}).mouseleave(()=>{subMove = true;})

// 離開子選單點擊其他地方
$('#toService,#toProtection').mouseenter(()=>{ subState = false;}).mouseleave(()=>{subState = true;})
$(document).click(()=>{
    if(subState){ $('#toService,#toProtection').removeClass('--active');}  
})

$(document).scroll(function(){
    let nowTop = $(this).scrollTop();
    if(nowTop > 0){
        $('#header').addClass('--fix');
    }else{
        $('#header').removeClass('--fix');
    }
})

$('#ham_btn').click(()=>{
    $('#header').toggleClass('--open');
})

$('#toService li, #toHome, #toAbout, #toContact').click(()=>{
    $('#header').removeClass('--open');
})

// 點擊menu捲動前往位置
function menuScTo(val){
	if(val == 0){
		$(window).scrollTop(0);
	}else{
		let hdH = Number($('#header').height());
		let boxH;
		switch(val){
			case 1: 
			case 2:
			case 3:
				boxH = Number($(`#about`).offset().top); break;
			case 4:
				boxH = Number($(`#contact`).offset().top); break;
		}
		$(window).scrollTop(boxH - hdH);
	}  
}

AOS.init();



$(window).ready(function(){
    // 頂部輪播
    $("#nivoslider").nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 800,
        pauseTime: 4000,
        startSlide: 0,
        directionNav: false,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false
    });

    // 可拖動響應式卡牌
    $('#servicesCarouse').owlCarousel({     
        nav: false,
        dots:true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 32
            },
            599: {
                items: 2,
                margin: 32
            },
            996: {
                items: 3,
                margin: 32
            },
            1024: {
                items: 3,
                margin: 32
            },
            1180: {
                items: 3,
                margin: 32
            }
        }
    })

    // 字幕顯示
    let slider_idx = 0;
    $(`#sliderTxt li:eq(${slider_idx})`).addClass('--active');
    slider_idx++;
    setInterval(()=>{
        $(`#sliderTxt li`).removeClass('--active');
        $(`#sliderTxt li:eq(${slider_idx})`).addClass('--active');
        slider_idx = slider_idx == $(`#sliderTxt li`).length-1? 0 : slider_idx+1;
    },4000)
})



