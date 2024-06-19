
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
$(document).ready(function() {
    function toggleDetails() {
        if ($(this).text() === "Xem thêm") {
            $(this).text("Ẩn đi");
            $(".item-directory").show();
        } else {
            $(this).text("Xem thêm");
            $(".item-directory").slice(6).hide();
        }
    }

    function handleResize() {
            $(".item-directory").slice(6).hide();
            $("#toggle-details").on("click", toggleDetails);
        
    }

    handleResize(); // Gọi hàm một lần khi tải trang để thiết lập ban đầu
});
$(document).ready(function() {
    function toggleDetails() {
        if ($(this).text() === "Xem thêm") {
            $(this).text("Ẩn đi");
            $(".item-product__sale").show();
        } else {
            $(this).text("Xem thêm");
            $(".item-product__sale").slice(4).hide();
        }
    }

    function handleResize() {
            $(".item-product__sale").slice(4).hide();
            $("#toggle-sale").on("click", toggleDetails);
        
    }

    handleResize(); // Gọi hàm một lần khi tải trang để thiết lập ban đầu
});
$(document).ready(function() {
    function toggleDetails() {
        if ($(this).text() === "Xem thêm") {
            $(this).text("Ẩn đi");
            $(".item-product__favorite").show();
        } else {
            $(this).text("Xem thêm");
            $(".item-product__favorite").slice(4).hide();
        }
    }

    function handleResize() {
            $(".item-product__favorite").slice(4).hide();
            $("#toggle-favorite").on("click", toggleDetails);
        
    }

    handleResize(); // Gọi hàm một lần khi tải trang để thiết lập ban đầu
});
$(document).ready(function() {
    function toggleDetails() {
        if ($(this).text() === "Xem thêm") {
            $(this).text("Ẩn đi");
            $(".item-product__trend").show();
        } else {
            $(this).text("Xem thêm");
            $(".item-product__trend").slice(4).hide();
        }
    }

    function handleResize() {
            $(".item-product__trend").slice(4).hide();
            $("#toggle-trend__buy").on("click", toggleDetails);
        
    }

    handleResize(); // Gọi hàm một lần khi tải trang để thiết lập ban đầu
});

