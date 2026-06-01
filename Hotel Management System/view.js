class SubmissionViewer{

constructor(){
    this.tableBody = document.getElementById("tableBody");
    this.search = document.getElementById("search");
    this.data = JSON.parse(localStorage.getItem("guests")) || [];
    this.display(this.data);
    this.search.addEventListener("input",()=>{
        this.filterData();
    });
}

display(data){

    this.tableBody.innerHTML="";
    if(data.length===0){
        document.getElementById("nodata").innerText="No data found";
        return;
    }

    data.forEach(i=>{
        this.tableBody.innerHTML += `
            <tr>
                <td>${i.name}</td>
                <td>${i.phone}</td>
                <td>${i.email}</td>
                <td>${i.checkin}</td>
                <td>${i.adults}</td>
            </tr>
        `;

        });
    }

    filterData(){

        let value = this.search.value.toLowerCase();
        let filtered = this.data.filter(g => 
            g.name.toLowerCase().includes(value)
        );

            this.display(filtered);
        }
    }

    new SubmissionViewer();