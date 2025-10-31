import { useState } from "react";
import Form from "../components/form";
import MainLayout from "../layout/main-layout";

export default function Index() {
	const [addText, setAddText] = useState({text: "", titre: ""});

	// variable a l'interieur function
	const envoyer = e =>{
		e.preventDefault(); // N'envoie pas le formulaire, cada vez q haceos onSumit refresh la paguina y envia los datos
		let date = new Date();  
        let formData = new FormData();
		formData.append("titre", addText.titre);
        formData.append("text", addText.text);
		formData.append("date", date.toDateString());

        fetch("/api/index.php", {
            method: "POST",
            body : formData
        })
        .then(response => response.json())
        .then(data => {
			console.log(data);
        })
	}


  	return  <MainLayout title="Accueil" titleColor="red" >
				{/* FORM HERE */}
				<div className="bg-amber-500 ">
					{/* en btn Submit va hacer lo k esta en onSubmit en form, envoyer (e) va enviar lo k pusimos esta en form */}
					<form action="" method="post" onSubmit={e => envoyer(e)}>
						<textarea className = "border-2"name="text" id="" value={addText.text} onChange={(e) => setAddText({...addText, text : e.target.value})} ></textarea>
						<input className = "border-2"  value={addText.titre} onChange={(e) => setAddText({...addText, titre : e.target.value})} type="text" />
						<button className = "bg-red-500 border-2" type="submit" > Envoyer</button>
					</form>
				</div>
				
          	</MainLayout>
}
