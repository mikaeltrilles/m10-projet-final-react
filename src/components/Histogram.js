import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import moment from "moment";

const Histogram = ({ setShowHistogram, setShowSynthese }) => {

    /* en fucnion du moi et anné : une list des dates en fonction du mois Acout et anné 2017
    loop generate les elements 
    
    let data
    
    listes des dates à checquer . forEach( (jourAfficherDansHisto) => {
    
      data = listAbsences.map((abs) => {
        const found = abs.jours.find(jourAbsence => jourAbsence === listDesDates[index]);
        if(found)
         return {name: jourAfficherDansHisto
                abs.nom : 1}
      })else{
        return {name: jourAfficherDansHisto}
      }
    
    })
    
    */


    //    const [listBar, setListBar] = useState([]);
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/absences/all')
            .then(res => {


                // Génération de la liste des jours pour l'affichange mensuel du premier au dernier jour du mois
                const ListCheck = [];   // liste des jours à afficher
                const firstDay = moment().startOf('month').format("YYYY-MM-DD");    // premier jour du mois
                const lastDay = moment().endOf('month').format("YYYY-MM-DD");   // dernier jour du mois
                const start = moment(firstDay); //  date de début
                const end = moment(lastDay);    // date de fin
                while (start <= end) {  // boucle pour générer la liste des jours
                    ListCheck.push(start.format("YYYY-MM-DD")); // ajout du jour à la liste
                    start.add(1, 'days');   // ajout d'un jour à la date de début
                }


                // const ListCheck = ["2022-12-19","2022-12-20","2022-12-21","2022-12-22","2022-12-23","2022-12-24","2022-12-25"];
                const listData = ListCheck.map((jour) => { return { name: jour } })

                const data = listData.map((ele) => {
                    res.data.forEach(abs => {
                        const found = abs.jours.find(jourAbsence => { return moment(jourAbsence).format("YYYY-MM-DD") === ele.name })
                        if (found) {
                            ele[abs.nom + ' ' + abs.prenom] = 1
                        }
                    })
                    // console.log(ele)
                    return ele
                })
                setData(data)
                // console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/api/auth/all')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const handleClick = () => {
        setShowHistogram(false);
        setShowSynthese(true);
    }

    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
    // console.log(generateRandomColor()); 

    return (
        <div>
            <div>
                Histogramme par département et par jour
                <BarChart
                    width={1500}
                    height={450}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* image length.absense === 6 */}
                    {
                        users.map((user) => {
                            return <Bar dataKey={user.name} stackId="a" fill={generateRandomColor()} />
                        })
                    }

                </BarChart>
            </div>

            <button className='btn btn-primary btn-sm' onClick={handleClick}> retour </button>
        </div>
    );
};

export default Histogram;