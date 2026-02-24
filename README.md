## Student Poll Queue Manager

----------

### <span style="color:green">Project Goal</span>
Create a web application for teaching any course that allows you to manage a list of
students and select random participants to respond in real time

### <span style="color: green">Student status (Data Schema)</span>
**ID**: Unique number (use Date.now()).<br>
**Status**: idle (left), answering (middle), finished (right).

### <span style="color: green">GUI</span>
Whenever a student is moved between columns (by drag-and-drop or button), the status of the
data array must be immediately synchronized with localStorage (in the browser).

Group selector: Add a regular one above the left panel.
When it is changed, JS will filter the array of students and display only those
whose group === selectedGroup.

Random selection logic: It will not work with the entire list,
but only with the filtered one (those currently visible in the left column).

<span style="color: yellow">Be sure to provide a function for importing/exporting data in JSON</span>

File example:

    {
        “groups”: [‘A1_Morning’, “B1_Evening”],
        “currentGroup”: “A1_Morning”,
        “students”: [
            { “id”: 1, “name”: “Ivan Ivanov”, “status”: “idle”, ‘group’: “A1_Morning” },
            { “id”: 2, “name”: “Petras Petraitis”, “status”: “idle”, ‘group’: “A1_Morning” },
            { “id”: 3, “name”: “Jonas Jonaitis”, “status”: “idle”, ‘group’: “B1_Evening” }
        ]

Drag-and-Drop: Add the ability to drag and drop cards
with the mouse (HTML5 Drag and Drop API).

Search: Add a “Quick search by name” field.

### <span style="color: green">Working with the system</span>

1. There are three panels on the screen: the list of students (list of all) on the left,
   the list of respondents in the middle, and the list of respondents on the right.
2. At the junctions of the panels, there are buttons for controlling the movement of
   selected students.
3. A student is selected by pressing the corresponding button on the student's element
   or by pressing the random selection button, after specifying the number
   in the corresponding field, but no more than half of all those remaining in the left list
   and no less than 1.
4. The selected students are transferred to the middle column. Step 3 can be repeated
5. After they answer, by clicking the button between the middle and right panels, the students from the middle
   panel are transferred to the right panel.
6. If there are no more candidates in the left panel, click the reset button to return
   everyone from the right and middle panels to the left panel.
7. Repeat from step 3.

### <span style="color: green">Technology stack</span>

1. HTML5, CSS3, VanillaJS
2. JSON for storing information
3. Webstorm or Rubymain

### <span style="color: red">TODO:</span>
1. Add group selection and saving
2. Move the entire backend and GUI online
3. Create registration for teachers and students
4. The teacher enters their office, where they can see their groups and students
   whom they can manage (create groups, add students,
   delete groups and students).<br>
   Students can see their groups, which they can leave themselves.


---------
# RUS


## Менедежер очереди опроса учащихся 

----------

### <span style="color:green">Цель проекта</span>
Создать веб-приложение для преподования на любых курсах, позволяющее управлять списком
студентов и выбирать случайных участников для ответа в режиме реального времени

### <span style="color: green">Состояния ученика (Data Schema)</span>
**ID**: Уникальный номер (использовать Date.now()).<br>
**Status**: idle (в левой), answering (в средней), finished (в правой).

### <span style="color: green">GUI</span>
При любом перемещении студента между колонками (drag-and-drop или кнопкой) состояние
массива данных должно немедленно синхронизироваться с localStorage (в браузере).

Селектор групп: Над левой панелью нужно добавить обычный. 
При его смене JS будет фильтровать массив студентов и отображать только тех
у кого group === selectedGroup.

Логика случайного выбора: Она будет работать не со всем списком
а только с отфильтрованным (теми, кто сейчас виден в левой колонке).

<span style="color: yellow">Обязательно предусмотреть функцию для импорта/экспорта данных в JSON</span>

Пример файла:

    {
        "groups": ["A1_Morning", "B1_Evening"],
        "currentGroup": "A1_Morning",
        "students": [
            { "id": 1, "name": "Иван Иванов", "status": "idle", "group": "A1_Morning" },
            { "id": 2, "name": "Пятрас Пятрайтис", "status": "idle", "group": "A1_Morning" },
            { "id": 3, "name": "Йонас Йонайтис", "status": "idle", "group": "B1_Evening" }
        ]
    }      

Drag-and-Drop: добавление возможности перетаскивать карточки 
мышкой (HTML5 Drag and Drop API).

Поиск: Добавить «Поле быстрого поиска по имени».

### <span style="color: green">Работа с системой</span>

1. На экране три панели, влевой список учеников (список всех)<br>
   в средней (список отвечающих) и правой (список ответивших) ничего нет
2. На стыках панелей на ходятся кнопки для управления перемещением
   выбранных учеников
3. Выбор ученика происходит нажатием соответствующей кнопки на элементе ученика
   или нажатием кнопки случайного выбора, предварительно указав количество
   в соответствующем поле, но не более половины от всех оставшихся в левом списке
   но неменее 1.
4. Выбранные ученики переносятся в среднюю колонку, шаг 3 можно повторить
5. После их ответа, нажав кноку между средней и правой панелью, ученики из средней
   панели переносятся в правую панель.
6. Если кандитдаты в левой панели закончились, нажатием кнопки reset возвращаем
   всех в левую панель из правой и средней панели
7. Повторяем с шага 3.

### <span style="color: green">Стек технологий</span>

1. HTML5, CSS3, VanillaJS
2. JSON для хранения информации
3. Webstorm или Rubymain

### <span style="color: red">TODO:</span>
1. Добавить выбор и сохранение групп
2. Перенести весь бекэнд и GUI в онлайн
3. Сделать регистрацию для учетелей и учеников
4. Учитель попадает в свой кабинет, где видет свои группы и учеников
   которыми может манипулировать (создание групп, наполнение учениками,
   удаление групп и учеников)<br>
   Ученик видит свои группы из которых может сам выйти
