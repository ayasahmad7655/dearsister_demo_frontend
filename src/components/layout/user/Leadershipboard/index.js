import React, { useEffect, useState } from "react";
// import "./table.css";
import axios from "axios";

const endpoint = "https://acm.savaal.xyz/leaderboard";

const get_leaderboard_data = () => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(endpoint)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
};

const User_Leader = (props) => {
  //   const [scores, setScores] = useState();
  const scores = [
    {
      contributor: "Shubam",
      score: "550",
    },
    {
      contributor: "Sahil",
      score: "434",
    },
    {
      contributor: "Fatima",
      score: "441",
    },
    {
      contributor: "Arif",
      score: "344",
    },
    {
      contributor: "Kushboo",
      score: "244",
    },
    {
      contributor: "Amit",
      score: "244",
    },
  ];
  //   useEffect(() => {
  //     get_leaderboard_data()
  //       .then((data) => {
  //         // sanitize the scores
  //         var player_score_object = {};
  //         data.map((score) => {
  //           if (!player_score_object.hasOwnProperty(score.contributor)) {
  //             player_score_object[score.contributor] = 0;
  //           }
  //           var clean_score = parseInt(score.points);
  //           player_score_object[score.contributor] += clean_score;
  //           return null;
  //         });

  //         // load into a list and sort
  //         var scores_array = [];
  //         for (var key in player_score_object) {
  //           scores_array.push({
  //             contributor: key,
  //             score: player_score_object[key],
  //           });
  //         }

  //         scores_array.sort((first, second) => first.score < second.score);
  //         setScores(scores_array);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, []);

  return (
    <table align="center">
      <thead>
        <tr>
          <th> Position </th>
          <th> Student</th>
          <th> Scores </th>
        </tr>
      </thead>
      <tbody>
        {scores &&
          scores.map((score, index) => {
            return (
              <tr style={{ height: "10px" }} key={score.contributor}>
                <td> {index + 1} </td>
                <td> {score.contributor} </td>
                <td> {score.score} </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default User_Leader;
