 // Hàm thêm xe
        function addCar() {
            const model = document.getElementById("model").value.trim();
            const price = document.getElementById("price").value.trim();
            const speed = document.getElementById("speed").value.trim();
            const color = document.getElementById("color").value.trim();

            if (model === "" || price === "" || speed === "" || color === "") {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }

            const cars = JSON.parse(localStorage.getItem("cars")) || [];
            cars.push({ model, price, speed, color });
            localStorage.setItem("cars", JSON.stringify(cars));

            alert("Thêm xe thành công!");
            document.getElementById("model").value = "";
            document.getElementById("price").value = "";
            document.getElementById("speed").value = "";
            document.getElementById("color").value = "";

            renderCars();
        }

        // Hiển thị danh sách xe
        function renderCars() {
            const cars = JSON.parse(localStorage.getItem("cars")) || [];
            const carList = document.getElementById("car-list");
            carList.innerHTML = "";

            cars.forEach(car => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${car.model}</td>
                    <td>${car.price}</td>
                    <td>${car.speed}</td>
                    <td>${car.color}</td>
                `;
                carList.appendChild(row);
            });
        }

        // Tự động hiển thị khi tải trang
        document.addEventListener("DOMContentLoaded", renderCars);