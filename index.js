function onLoadFunct() {
    //event for button submit
    var click = document.getElementById('submit')
    var n = 0 //variable for assign an id
    if (click) {
        click.addEventListener('click', function (event) {
            event.stopPropagation()
            n += 1
            //create item in list
            var el = document.createElement("li")
            el.id = n
            var del = '<i class="del" onclick="Del(' + n + ')"></i>'
            //check if input empty -> ignore
            var value = -document.getElementById("item").value
            if (value !== -0) {
                el.innerHTML = '<input type="checkbox" id="check' + n + '">' + document.getElementById("item").value + del
                list.insertBefore(el, list.childNodes[0])
                unselect.insertBefore(el, unselect.childNodes[0])
            }
            //reset input
            document.getElementById("item").value = ""
            // number of items list
            var sum = document.getElementById('list').getElementsByTagName('li')
            var item = 0
            for (i = 0; i < sum.length; i++) {
                item += 1
            }
            document.getElementById('sum').innerHTML = 'number of items ' + item
            // number of items unselect
            var sum = document.getElementById('unselect').getElementsByTagName('li')
            var item = 0
            for (i = 0; i < sum.length; i++) {
                item += 1
            }
            document.getElementById('sum').innerHTML = 'number of unchecked ' + item
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
                    document.getElementById("list").appendChild(el[i])
                }
            }, false)
            document.getElementById('list').style.display = 'block'
            document.getElementById('select').style.display = 'none'
            document.getElementById('unselect').style.display = 'none'
            // number of items
            var sum = document.getElementById('list').getElementsByTagName('li')
            var item = 0
            for (i = 0; i < sum.length; i++) {
                item += 1
            }
            document.getElementById('sum').innerHTML = 'number of items ' + item
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
                        document.getElementById("select").appendChild(el[i])
                    }
                }
                //find unselected element in select
                el = document.getElementById('select').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked === false) {
                        document.getElementById("unselect").appendChild(el[i])
                    }
                }
            }, false)
            document.getElementById('select').style.display = 'block'
            document.getElementById('list').style.display = 'none'
            document.getElementById('unselect').style.display = 'none'
            // number of items
            var sum = document.getElementById('select').getElementsByTagName('li')
            var item = 0
            for (i = 0; i < sum.length; i++) {
                item += 1
            }
            document.getElementById('sum').innerHTML = 'number of checked ' + item
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
                el = document.getElementById('unselect').getElementsByTagName('li')
                for (i = 0; i < el.length; i++) {
                    idLi = el[i].getAttribute('id')
                    idCheck = "check" + idLi
                    li = document.getElementById(idCheck)
                    if (li.checked) {
                        document.getElementById("select").appendChild(el[i])
                    }
                }
            }, false)
            document.getElementById('unselect').style.display = 'block'
            document.getElementById('list').style.display = 'none'
            document.getElementById('select').style.display = 'none'
            // number of items
            var sum = document.getElementById('unselect').getElementsByTagName('li')
            var item = 0
            for (i = 0; i < sum.length; i++) {
                item += 1
            }
            document.getElementById('sum').innerHTML = 'number of unchecked ' + item
        })
    }
}
//delete item
function Del(id) {
    var el = document.getElementById(id)
    el.parentNode.removeChild(el)
}