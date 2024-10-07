//
//フォーム項目表示/非表示
//------------------------------------
jQuery(function($) {
    // ラジオボタンの変更イベントを監視
    $('.js-form-display-q, .js-form-display-q2, .js-form-display-q3').on('change', 'input[type="radio"]', function() {
        const isCheckedQ = $('.js-form-display-q input[type="radio"].--check:checked').length > 0;
        const isCheckedQ2 = $('.js-form-display-q2 input[type="radio"].--check:checked').length > 0;
		const isCheckedQ3 = $('.js-form-display-q3 input[type="radio"].--check:checked').length > 0;
        
        // js-form-display-aの表示/非表示を制御
        if (isCheckedQ) {
            $('.js-form-display-a').fadeIn();
        } else {
            $('.js-form-display-a').fadeOut();
        }

        // js-form-display-a2の表示/非表示を制御
        if (isCheckedQ2) {
            $('.js-form-display-a2').fadeIn();
        } else {
            $('.js-form-display-a2').fadeOut();
        }

		// js-form-display-a3の表示/非表示を制御
        if (isCheckedQ3) {
            $('.js-form-display-a3').fadeIn();
        } else {
            $('.js-form-display-a3').fadeOut();
        }
    });

    // 初期表示時にチェックされている場合に表示切り替えを実行
    const isCheckedQ = $('.js-form-display-q input[type="radio"].--check:checked').length > 0;
    const isCheckedQ2 = $('.js-form-display-q2 input[type="radio"].--check:checked').length > 0;
	const isCheckedQ3 = $('.js-form-display-q3 input[type="radio"].--check:checked').length > 0;
    
    if (isCheckedQ) {
        $('.js-form-display-a').fadeIn();
    } else {
        $('.js-form-display-a').hide();
    }

    if (isCheckedQ2) {
        $('.js-form-display-a2').fadeIn();
    } else {
        $('.js-form-display-a2').hide();
    }

    if (isCheckedQ3) {
        $('.js-form-display-a3').fadeIn();
    } else {
        $('.js-form-display-a3').hide();
    }
});


const wattage1 = document.querySelector("input[name=w1]");
const wattage2 = document.querySelector("input[name=w2]");
const wattage3 = document.querySelector("input[name=w3]");
const wattage4 = document.querySelector("input[name=w4]");
const wattage5 = document.querySelector("input[name=w5]");
const result = document.querySelector("input[name=result]");
const calc = ()=>{
    result.value = Number(wattage1.value) + Number(wattage2.value) + Number(wattage3.value) + Number(wattage4.value) + Number(wattage5.value);
}

wattage1.addEventListener("keyup", calc, false);
wattage2.addEventListener("keyup", calc, false);
wattage3.addEventListener("keyup", calc, false);
wattage4.addEventListener("keyup", calc, false);
wattage5.addEventListener("keyup", calc, false);
