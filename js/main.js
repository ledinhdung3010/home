
//selected-page
 $('.page-item').on('click', function() {
  console.log('====================================');
  console.log('aaa');
  console.log('====================================');
    $('.page-item').removeClass('selected');
    $(this).addClass('selected');
});
//btn-prev
$('.btn-prev').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var prevBtn = selectedBtn.prev('.page-item');
    if (prevBtn.length > 0) {
        selectedBtn.removeClass('selected');
        prevBtn.addClass('selected');
    }
});
//btn-next
$('.btn-next').on('click', function() {
    var selectedBtn = $('.page-item.selected');
    var nextBtn = selectedBtn.next('.page-item');
    if (nextBtn.length > 0) {
        selectedBtn.removeClass('selected');
        nextBtn.addClass('selected');
    }
});