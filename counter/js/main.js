'use strict';

var count = 0;

var $btnGenStart = $('#generic-start');
var $btnFlipStart = $('#flip-start');
var $txtInitNumber = $('#init-number');
var $txtGenCounter = $('#generic-counter');
var $txtFlipCounter = $('#flip-counter');

var clock;

/**
 * カウンター(通常)表示ボタン押下時の処理
 */
$btnGenStart.click(function(e) {
    $('#init-screen').hide();
    $('#generic-screen').show();
    reset();
    viewGeneric(count);
});

/**
 * カウンター(フリップ)表示ボタン押下時の処理
 */
$btnFlipStart.click(function(e) {
    $('#init-screen').hide();
    $('#flip-screen').show();
    reset();
});


/**
 * キー押下時の処理
 */
$(window).keydown(function(e) {
    if (e.keyCode == 40) {  // 下矢印
        count = count > 0 ? count - 1 : 0;
    } else if (e.keyCode == 32) { // スペース
        reset();
    } else {
        count++;
        if (clock) {
            clock.increment();
        }
    }
    viewGeneric(count);
});

/**
 * カウンターリセット
 */
function reset() {
    // 通常カウンタ
    count = $txtInitNumber.val();

    // Flip
    clock = $txtFlipCounter.FlipClock(count, {
       clockFace: 'Counter' 
    });
}

/**
 * カウンター表示
 */
function viewGeneric(c) {
    $txtGenCounter.text(c);
}