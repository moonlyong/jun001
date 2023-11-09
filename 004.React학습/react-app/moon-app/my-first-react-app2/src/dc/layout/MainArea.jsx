// MainArea 컴포넌트

import { Banner } from "../contents/Banner";
import { Character } from "../contents/Charactor";
import { Video } from "../contents/Video";
import { Comic } from "../contents/Comic";
import { Movie } from "../contents/Movie";
import { Game } from "../contents/Game";
import { News } from "../contents/News";
import { Main } from "../contents/Main";

export function MainArea(props) {

    // cat 속성으로 메뉴분류 전달
    return (
        <main className="cont">
            {props.cat == "main" && <Main cat={props.cat} />}
            {props.cat == "CHARACTERS" && <Character cat={props.cat} />}
            {props.cat == "VIDEO" && <Video cat={props.cat} />}
            {props.cat == "COMICS" && <Comic cat={props.cat} />}
            {props.cat == "MOVIES" && <Movie cat={props.cat} />}
            {props.cat == "GAMES" && <Game cat={props.cat} />}
            {props.cat == "NEWS" && <News cat={props.cat} />}
        </main>
    );
} ///////// MainArea 컴포넌트 ////////////
