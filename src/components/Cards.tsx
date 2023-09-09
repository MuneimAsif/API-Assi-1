import { useNavigate } from "react-router-dom"
type propsType = { arr: any[] };
export default function ShowDataCard(props: propsType) {
    const navigate = useNavigate()
    const view = (a: string) => { navigate(`about/${a}`) }
    return <>
        <div className="container ">
            <div className="row d-flex">
                {props.arr.map((x: any, i: any) =>
                    <div className="col-md-4 my-5" key={i}>
                        <div className="card mx-auto" style={{ height: "300px", backgroundColor: "lightsalmon" }}>
                            <ul className="list-group list-group-flush">
                                <img src={x.image} alt="" className="mx-auto" width={"90px"} height={"90px"} />
                                <li className="list-group-item text-danger fs-5 fw-bold" >{x.title}</li>
                                <li className="list-group-item text-danger">{x.id}</li>
                                <li className="list-group-item text-danger">{x.category}</li>
                            </ul>
                            <button className="btn btn-info w-100" onClick={() => view(x.price)}>View...</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    </>
}
