import React from "react";
import "./Table.css"
import "./loading.css"
import { useHistory } from "react-router-dom"

export default class Table extends React.Component {
    constructor({ pin, setPin }) {
        super({ pin, setPin });
        this.state = {
            items: [],
            isLoaded: false
        };
        setTimeout(function () {
            fetch('https://api.postalpincode.in/pincode/' + pin)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json
                    })
                    console.log(json)
                })
        }.bind(this), 1000)

    }


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <div class="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
        else {
            var result = items.map(item => item.Status)
            console.log(result[0])
            if (result[0] === "Success") {
                return (
                    <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column">Name</th>
                                        <th className="cell100 column">BranchType</th>
                                        <th className="cell100 column">DeliveryStatus</th>
                                        <th className="cell100 column">Circle</th>
                                        <th className="cell100 column">District</th>
                                        <th className="cell100 column">Division</th>
                                        <th className="cell100 column">Region</th>
                                        <th className="cell100 column">State</th>
                                        <th className="cell100 column">Country</th>
                                        <th className="cell100 column">Pincode</th>

                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    {items.map((item, i) => (
                                        <div key={i}>{item.PostOffice.map((item, i) => (
                                            <tr class="row100 body" key={i}>
                                                <td class="cell100 column">{item.Name}</td>
                                                <td class="cell100 column">{item.BranchType}</td>
                                                <td class="cell100 column">{item.DeliveryStatus}</td>
                                                <td class="cell100 column">{item.Circle}</td>
                                                <td class="cell100 column">{item.District}</td>
                                                <td class="cell100 column">{item.Division}</td>
                                                <td class="cell100 column">{item.Region}</td>
                                                <td class="cell100 column">{item.State}</td>
                                                <td class="cell100 column">{item.Country}</td>
                                                <td class="cell100 column">{item.Pincode}</td>
                                            </tr>
                                        ))}</div>
                                    )

                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>

                );
            } else {
                return (
                    <>
                        <h1>No Data</h1>
                    </>
                )
            }

        }

    }
}