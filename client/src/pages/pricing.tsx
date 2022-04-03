import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Nav from '../components/Nav'
const pricing = ({ post }) => {
    return (
        <>
            <Nav />
            <header>
                <div className="row">
                    <div className="i-left">
                        <h1 className="h1font">No subscriptions, no monthly payments.</h1>
                        <h3 className="sub-subheader">Pay as you go, or SAVE!</h3>
                        <p className="subheader">
                            With TutorU's pricing options, choose to pay-as-you-go for a set fee (no extra commitments!),
                            or save with a pre-purchased tutoring plan.
                        </p>
                    </div>
                    <div className="i-right">
                        <table className="table table-bordered border-dark">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">Plans</th>
                                    <th scope="col">Per Minute</th>
                                    <th scope="col">Hours</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th scope="row">Starter</th>
                                    <td>$0.82</td>
                                    <td>Pay as You Go</td>
                                    <td>$0.00</td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Genius</th>
                                    <td>$0.73</td>
                                    <td>8 hours</td>
                                    <td>$352</td>
                                    <td>$40</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mastermind</th>
                                    <td>$0.70</td>
                                    <td>16 hours</td>
                                    <td>$672</td>
                                    <td>$115</td>
                                </tr>
                                <tr>
                                    <th scope="row">Einstein</th>
                                    <td>$0.65</td>
                                    <td>32 hours</td>
                                    <td>$1,248</td>
                                    <td>$326</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </header>
            <Footer/>
        </>
    );
};

export default pricing;
