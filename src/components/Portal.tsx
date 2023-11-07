import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';


export const Portal =
    ( { children, getHTMLElementId }: any ) => {
        // находим искомый HTML по id
        // const mount = document.getElementById(getHTMLElementId)
        // const mount = useRef("driver-2").current;
        const mount = document.getElementById("driver-2")
        // const mount = document.getElementById(elementId)
        // создаём свой div
        const el = document.createElement('div')

        useEffect(() => {
            // добавляем свой див к искомому элементу
            if (mount) mount.appendChild(el)
            // return () => {
            //     // удаляем элемент от искомого при завершении компоненты
            //     if (mount) mount.removeChild(el)
            // }

            console.clear()
            console.log("mount:", mount)
        }, [ el, mount ])
       
        // отменяем отрисовку при отсутствии искомого элемента
        if (!mount) return null

       
        // собственно, пририсовываем React-элемент в div к искомому HTML
        return createPortal(children, mount)
    }