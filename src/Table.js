import { useState } from "react";

const Table = () => {
    const articleData =
        [
            { date: "2022-09-01", views: 100, article: "Article 1" },
            { date: "2023-09-01", views: 100, article: "Article 1" },
            { date: "2023-09-02", views: 150, article: "Article 2" },
            { date: "2023-09-02", views: 120, article: "Article 3" },
            { date: "2020-09-03", views: 200, article: "Article 4" }
        ];

    const [sortedArray, setSortedArray] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const handSortByDate = () => {
        const sortByDate = articleData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedArray(sortByDate);
    }

    const handSortByViews = () => {
        const sortByDate = articleData.sort((a, b) => b.views - a.views);
        setSortedArray(sortByDate);
    }

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={handSortByDate}>Sort by Date</button>
            <button onClick={handSortByViews}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedArray.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.views}</td>
                                <td>{item.article}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;