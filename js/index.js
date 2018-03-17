function onLoadFunct() {
    //event for button submit
    var form = document.getElementById('form')
    var n = 0 //variable for assign an id
    const allItem = document.getElementById('list')
    const selectedList = document.getElementById('select')
    const unselectedList = document.getElementById('unselected')
    var liList = document.getElementsByTagName('li')
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()
            n += 1
            //create item in list
            var el = document.createElement('li')
            el.id = n
            var del = '<i class="del material-icons" onclick="Del(' + n + ')">close</i>'
            //check if input empty -> ignore
            var value = document.getElementById('item').value
            if (value.replace(/ /g, '')) {
                el.innerHTML = '<input type="checkbox" onchange="Check()" id="item' + n + '"><label for="item' + n +'">' + value + '</label>' + del
                list.insertBefore(el, list.childNodes[0])
            }
            //reset input
            document.getElementById('item').value = ''
            Check()
        }, false)
    }
    //event for button all
    var all = document.getElementById('all')
    if (all) {
        all.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(liList, function () {
                for (var i = 0; i < liList.length; i++) {
                    allItem.appendChild(liList[i])
                }
            }, false)
            allItem.style.display = 'block'
            selectedList.style.display = 'none'
            unselectedList.style.display = 'none'
        })
    }
    //event for button checked
    var checked = document.getElementById('checked')
    if (checked) {
        checked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(liList, function () {
                //find selected element
                for (i = 0; i < liList.length; i++) {
                    if (liList[i].querySelector('input').checked) {
                        selectedList.appendChild(liList[i])
                    }
                }
                //find unselected element in select
                el = selectedList.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    if (el[i].querySelector('input').checked === false) {
                        unselectedList.appendChild(el[i])
                    }
                }
            }, false)
            selectedList.style.display = 'block'
            allItem.style.display = 'none'
            unselectedList.style.display = 'none'
        })
    }
    //event for button unchecked
    var unchecked = document.getElementById('unchecked')
    if (unchecked) {
        unchecked.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(liList, function () {
                //find unselected element
                for (i = 0; i < liList.length; i++) {
                    if (liList[i].querySelector('input').checked === false) {
                        unselectedList.appendChild(liList[i])
                    }
                }
                //find selected element in unselected
                el = unselectedList.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    if (el[i].querySelector('input').checked) {
                        selectedList.appendChild(el[i])
                    }
                }
            }, false)
            unselectedList.style.display = 'block'
            allItem.style.display = 'none'
            selectedList.style.display = 'none'
        })
    }
}

//delete item
function Del(id) {
    var el = document.getElementById(id)
    el.parentNode.removeChild(el)
    Check()
}

//sum unchecked item
function Check() {
    var el = document.getElementsByTagName('li')
    var item = 0
    for (var i = 0; i < el.length; i++) {
        if (el[i].querySelector('input').checked === false) {
            item += 1
        }
    }
    document.getElementById('sum').innerHTML = 'need to buy ' + item + ' items '
}
