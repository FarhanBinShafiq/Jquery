$(document).ready(() => {


  // $('button').click(()=>{
  //     $('ul li:nth-child(3)').hide()
  //     $('button').hide()


  // })

  // $('ul').hover(()=>{
  //    alert("Hello")
  //     },
  // ()=>{
  //     alert('bye')
  // }    
  //     )

  //  $("input").focus(()=>{
  //     $('input').css('background','red')
  //  })   


  //  mouse events

  // $('p').on({
  //     mouseenter:()=>{
  //         $('p').css('background','black')
  //         $('p').css('padding','10px')
  //     },
  //     mouseleave:()=>{
  //         $('p').css('background','red')
  //     },
  //     click:()=>{
  //         $('p').css('background','orange')
  //     }
  // })

  /// toggle

  //   $('button').click(()=>{
  //      $('p').toggle('slow')
  //   })

  //faded   

  // $('button').click(()=>{
  //    $('.box-1').fadeToggle('slow');
  //    $('.box-2').fadeToggle(2000);
  //    $('.box-3').fadeToggle(3000);
  //    $('.box-4').fadeToggle(4000);
  // })


  //Slide
  // $('#lorem').click(()=>{
  //    $('.lorem-text').slideToggle(2000);
  // })

  ///animated

  //  $('button').click(()=>{
  //     var divJq=$('div')
  //     divJq.animate({height:'300px',opacity:'0.5'},"slow")
  //     divJq.animate({width:'300px',opacity:'0.5'},"slow")
  //     divJq.animate({height:'100px',opacity:'1'},"slow")
  //     divJq.animate({width:'100px',opacity:'1'},"slow")
  //     divJq.animate({fontSize:'100px',opacity:'1'},"slow")
  // })

  //append and prepend
  // $('button:first').click(()=>{
  //   $('h1').append('<b> Best Courese </b>')
  // })

  // $('button:last').click(()=>{
  //   $('h1').prepend('<b> Best Courese </b>')
  // })

  // Remove

  // $('button:first').click(() => {
  //   $('h1').remove()
  // })

  // $('button:last').click(() => {
  //   $('h1').empty()
  // })

  // CSS class add and dimension 

  // $('#addClass').click(() => {
  //   $('p')
  //   .toggleClass('learning')
  //   .height(500)
  //   .width(500)
  //   .css({
  //     'font-size':"100px"
  //   })
  // })

///Ancestors


$('span').parent().css({
  background:"red",
  border:'5px green'
})

})