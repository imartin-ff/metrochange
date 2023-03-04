$(".cabinet-nav__current").on("click", function(e){
    $(this).toggleClass("opened");
    $(".cabinet-nav__mobile--acordion").slideToggle(200);
})




// custom currency select


$(".currency__select-wrap").each((index, item) => {
    const realSelect = $(item).find("select");

    realSelect.find("option").each((optionIndex, option) => {
        $(item).find(".menu-scroller").append(`
            <a class="dropdown-item" href="#" data-value="${option.value}">
                <img src="${$(option).data('icon')}" alt="">
                ${$(option).data('name')}
            </a>
        `)
    })

    $(item).find(".dropdown-item").on("click", function(e){
        $(item).find(".dropdown-item").removeClass("selected");
        $(this).addClass("selected");
        e.preventDefault();
        const selectedValue = $(this).attr('data-value');
        const selectedOption = $(item).find(`option[value='${selectedValue}']`);
        $(item).find(".currency-icon").attr("src", selectedOption.attr('data-icon'));
        $(item).find(".currency-name").text(selectedOption.eq(0).text());
        selectedOption.prop('selected', true)
    })
})



$(".message .close").on("click", function(e){
    e.preventDefault();
    $(this).closest(".message").slideUp(200);
})

function startTimer() {
    const timer = document.getElementById('timer');
    const time = timer.getAttribute('data-time'); // отримуємо час з атрибуту
  

  
    let totalSeconds = time;
    const mainTime = totalSeconds;
    const intervalId = setInterval(() => {
      totalSeconds--;
        
    
  
      timer.textContent = totalSeconds.toString().padStart(2, '0');
  
      const percent = (totalSeconds / mainTime) * 100;
        setProgress(percent);

      if (totalSeconds === 0) {
        clearInterval(intervalId);
        timer.textContent = '0'
        }
    }, 1000);
  }

  if(document.querySelector("#timer")){
    startTimer();
    const circle = document.querySelector('#progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeWidth = `${radius * 2}px`;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
      circle.style.fill = `conic-gradient(#ff9900 ${offset}deg, #ddd ${offset}deg)`;
    }
  }

  const inputs = document.querySelectorAll('input');

  // Перебираємо кожен елемент і додаємо обробник події 'blur'
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      // Перевіряємо, чи поле вводу містить значення
      if (this.value.trim() !== '') {
        // Якщо поле має значення, додаємо до нього клас "filled"
        this.classList.add('filled');
      }else{
        this.classList.remove('filled');
      }
    });
  });
  


 

var tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltips.forEach(item => {
    new bootstrap.Tooltip(item, {
        boundary: document.body // or document.querySelector('#boundary')
      });
})



// document.querySelectorAll("button[data-change]").forEach(btn => {
//   btn.addEventListener('click', function(e){
//     const changeID = btn.getAttribute('data-change');
//     const currencySelects = document.querySelectorAll(`.currency__select-wrap[data-change="${changeID}"]`);
//     const val1 = currencySelects[0].querySelector('.dropdown-menu .dropdown-item.selected').getAttribute('data-value');
//     const val2 = currencySelects[1].querySelector('.dropdown-menu .dropdown-item.selected').getAttribute('data-value');
    
//     console.log(val1, val2);
   
//   })
// })

$('button[data-change]').on("click", function(){
  const changeID = $(this).data('change');
  const currencySelects = $(`.currency__select-wrap[data-change="${changeID}"]`);
  const val1 = $(currencySelects[0]).find('.dropdown-menu .dropdown-item.selected').data("value");
  const val2 = $(currencySelects[1]).find('.dropdown-menu .dropdown-item.selected').data("value");
    
  if(val1 && val2){
  // удаляем выделеные елементы в выпадающем списке
  $(currencySelects[0]).find('.dropdown-menu .dropdown-item.selected').removeClass("selected");
  $(currencySelects[1]).find('.dropdown-menu .dropdown-item.selected').removeClass("selected");
  // выделяем елементы в выпадающих списках
  $(currencySelects[0]).find(`.dropdown-menu .dropdown-item[data-value="${val2}"]`).addClass("selected");
  $(currencySelects[1]).find(`.dropdown-menu .dropdown-item[data-value="${val1}"]`).addClass("selected");
  
  // УСтанавливаем новые значения select
  $(currencySelects[0]).find(`option[value='${val2}']`).prop('selected', true)
  $(currencySelects[1]).find(`option[value='${val1}']`).prop('selected', true)
  
  // УСтанавливаем новую иконку  и текст для первого селекта
  $(currencySelects[0]).find(".currency-icon").attr("src",  $(currencySelects[0]).find(`option[value='${val2}']`).attr('data-icon'));
  $(currencySelects[0]).find(".currency-name").text($(currencySelects[0]).find(`option[value='${val2}']`).eq(0).text());
  // УСтанавливаем новую иконку  и текст для второго селекта
  $(currencySelects[1]).find(".currency-icon").attr("src",  $(currencySelects[1]).find(`option[value='${val1}']`).attr('data-icon'));
  $(currencySelects[1]).find(".currency-name").text($(currencySelects[1]).find(`option[value='${val1}']`).eq(0).text());
  }
  


  })