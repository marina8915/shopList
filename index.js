
function onLoadFunct() {
    //event for button submit
    var form = document.getElementById('form')
    var n = 0 //variable for assign an id
    const allItem = document.getElementById('list')
    const selectedList = document.getElementById('select')
    const unselectedList = document.getElementById('unselect')
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()
            n += 1
            //create item in list
            var el = document.createElement("li")
            el.id = n
            var del = '<i class="del" onclick="Del(' + n + ')"></i>'
            //check if input empty -> ignore
            var value = -document.getElementById("item").value
            if (value !== -0) {
                el.innerHTML = '<input type="checkbox" id="check' + n + '"  onchange="Check()">' + document.getElementById("item").value + del
                list.insertBefore(el, list.childNodes[0])
            }
            //reset input
            document.getElementById("item").value = ""
            Check()
        }, false)

    }
    //event for button all
    var all = document.getElementById('all')
    if (all) {
        all.addEventListener('click', function (event) {
            event.stopPropagation()
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                el = document.getElementsByTagName('li')
                for (var i = 0; i < el.length; i++) {
                    allItem.appendChild(el[i])
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
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                //find selected element
                el = document.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    var idLi = el[i].getAttribute('id')
                    var idCheck = "check" + idLi
                    var li = document.getElementById(idCheck)
                    if (li.checked) {
                        selectedList.appendChild(el[i])
                    }
                }
                //find unselected element in select
                el = selectedList.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
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
            Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
                //find unselected element
                el = document.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(el[i])
                    }
                }
                //find selected element in unselect
                el = unselectedList.getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked) {
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
}
//sum unchecked item
function Check() {
    Array.prototype.forEach.call(document.getElementsByTagName("li"), function () {
        var item = 0
        var el = document.getElementsByTagName('li')
        for (var i = 0; i < el.length; i++) {
            if (el[i].querySelector('input').checked === false) {
                item+=1
                document.getElementById('sum').innerHTML = 'number of items ' + item
            }
        }
    }, false)
}