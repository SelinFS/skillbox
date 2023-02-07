(function () {

    const game = document.getElementById('game')
    let cardsOpen = document.getElementsByClassName('open');
    let cardsSaccess = document.getElementsByClassName('success');
    let btn = document.querySelector('.button');
    let form = document.querySelector('.form')
    let inputHorizontal = document.querySelector('.horizontal');
    let gameTimer = document.querySelector('.timer');
    let interval;

    let countCards;

    // создаем карты
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (inputHorizontal.value == 0 || inputHorizontal.value % 2 == 1 || inputHorizontal.value > 10) {
            inputHorizontal.value = 4; 
        }
            form.classList.add('form--disabled');
            game.classList.add('game--active');
            gameTimer.classList.add('timer--active');
            countCards = inputHorizontal.value * 2;
            gameTimer.textContent = 60;
            game.innerHTML = "";
            countCardsNumber();
            interval = setInterval(gameOver, 1000);
            
    })

    function newCard(number) {

        //создаем переменную кардс в которую помещаем элемент див
        let cards = document.createElement('div')

        //в этот элемент добавляем класс кард
        cards.classList.add('card');

        //в элемент кард прописываем номер карты, к которому привяжем номер элемента массива
        cards.textContent = number;

        //вешаем обработчик событий на кардс, при клике срабатывает класс опен
        cards.addEventListener('click', function () {
            cards.classList.add('open')

            if (cardsOpen.length === 2) {
                setTimeout(function () {
                    
                    flip(cardsOpen[0], cardsOpen[1]);
                },300)
            }
        })
        document.getElementById('game').append(cards)
    }

    function countCardsNumber() {

        //создаем переменную, в которую помещаем массив парных чисел
        let cardsNumberArray = [];
        for (let i = 1; i <= countCards / 2; i++) {
            cardsNumberArray.push(i)
            cardsNumberArray.push(i)
        }

        //берем созданный массив и перемешиваем его
        cardsNumberArray.push(cardsNumberArray.sort(() => Math.random() - 0.5))

        //проходимся по перемешенному массиву циклом и добавляем элементы массива в картнамбер
        for (let item = 0; item < countCards; item++) {

            newCard(cardsNumberArray[item]);

        }

    }

    //функция сравнивает 2 карты с классом open
    function flip(firstcard, secondcard) {

        //берем одно условие и проверяем 2 раза
        if (firstcard !== null && secondcard !== null) {
            //если два номера карт не равну друг другу то
            if (firstcard.textContent !== secondcard.textContent) {

                //у первой и второй карты удалем класс open
                firstcard.classList.remove('open');
                secondcard.classList.remove('open');

                //возвращаем null
                firstcard = null;
                secondcard = null;
            }
        }

        if (firstcard !== null && secondcard !== null) {

            //если номера первой и второй карты равны то
            if (firstcard.textContent == secondcard.textContent) {

                //добавляем двум картам класс success и удаляем open
                firstcard.classList.add('success');
                secondcard.classList.add('success');
                firstcard.classList.remove('open');
                secondcard.classList.remove('open');
            }
        }


        //если колличесво классов success ранво  колличеству карт, то выводим алерт и добавляем кнопке класс актив
        if (cardsSaccess.length === countCards) {
            alert('Вы выиграли!');

            clearInterval(interval);

            btn.classList.add('button-active');
        }

        //вешаем обработчик клик на кнопку при котрой срабатывает функция
        btn.addEventListener('click', btnReset)

        //функция удаляет класс у кнокпи 
        function btnReset() {
            gameTimer.classList.remove('timer--active');
            btn.classList.remove('button-active');
            form.classList.remove('form--disabled');
            game.classList.remove('game--active');
            game.innerHTML = "";
         
        }


    }

    function gameOver() {
        
        if (gameTimer.textContent > 0) {
            gameTimer.textContent --;
        } else {
            clearInterval(interval);
            alert('Время вышло');
            btn.classList.add('button-active');
            game.innerHTML = "";
        }    
        
    }

})();



