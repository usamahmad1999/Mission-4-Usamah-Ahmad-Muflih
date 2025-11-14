    function updateDateTime() {
      const now = new Date();
      // Format tanggal: Kamis, 16 Oktober 2025
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = now.toLocaleDateString('id-ID', options);

      // Format waktu: 05:32:10
      const timeStr = now.toLocaleTimeString('id-ID');

      document.getElementById('date').textContent = dateStr;
      document.getElementById('time').textContent = timeStr;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);



  let toDoList = [];

  const addToDo = (desc, priority, date, time) => {
    toDoList = [
      {
        desc,
        priority,
        date,
        time
      },
      ...toDoList,
    ]
  }

  const showToDoList = () => {
    if(toDoList.length > 0) {
      toDoList.forEach((item) => console.log(item))
      }
    else {
      console.log('data kosong')
    }
    }


  // tambah task
  function addTask() {
      const taskText = document.getElementById("taskInput").value.trim();
      const priority = document.getElementById("priority").value;

      if (taskText === "") {
        alert("Tugas baru tidak boleh kosong!");
        return;
      }

      toDoList.push({
        text: taskText,
        priority: priority,
        time: new Date().toLocaleString()
      });

      document.getElementById("taskInput").value = "";

      displayTasks();
    }


  function displayTaskDone() {
      const check = document.getElementsById("checklist")
      check.innerHTML = ""

      if(check !== null) {
          
        div.innerHTML = `
              <ul id="todoList">
                <li>
                    <div class="checkbox-todo">
                        <div class="checkbox">
                            <input type="checkbox" class="check" id="checklist">
                        </div>
                        <div>
                            <strong>[${task.priority}]</strong> 
                            <div class="name-todo">${task.text}</div>
                            <div class="time-stamp">${task.time}</div>
                        </div>
                    </div>
                    <button class="delete-btn">Delete</button>
                </li>

              </ul>
        `;
        task.appendChild(div);
        }
  }

  function displayTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      toDoList.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task-item";
          
        div.innerHTML = `
              <ul id="todoList">
                <li>
                    <div class="checkbox-todo">
                        <div class="checkbox">
                            <input type="checkbox" class="check" id="checklist">
                        </div>
                        <div>
                            <strong>[${task.priority}]</strong> 
                            <div class="name-todo">${task.text}</div>
                            <div class="time-stamp">${task.time}</div>
                        </div>
                    </div>
                    <button class="delete-btn">Delete</button>
                </li>

              </ul>
        `;
        list.appendChild(div);
        
      });
    }