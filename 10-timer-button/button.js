// $(function () {
//     var $btn = $('input'),
//         num = 6,
//         timer;

//     timer = setInterval(function () {
//         num --;
//         if (num === 0) {
//             clearInterval(timer);
//             $btn.val('同意');
//             $btn.removeAttr('disabled');
//         } else {
//             $btn.val('同意(' + num + 's)');
//         }
//     }, 1000);

//     $btn.click(function () {
//         alert('就知道你会同意的！');
//     })
// })

$(function () { 
    var t, a = $('input[type="button"]'), e = 9; 
    a.val("同意 (" + e + " s)"),
    a.attr("disabled", "disabled"), 
    t = window.setInterval(function () { 
        a.val("同意 (" + e-- + " s)"), 
        -1 === e && (window.clearInterval(t), 
        a.val("同意"),
        a.removeAttr("disabled"))
    }, 1e3), a.click(function () { 
        alert("就知道你会同意的！") }) 
    });