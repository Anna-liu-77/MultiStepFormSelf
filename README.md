# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- TypeScript
- [Angular](https://angular.io/) - Angular framework
- [PrimeNG](https://primeng.org/) - UI components
- [Bootstrap](https://www.bootstrap.cn/doc/read/123.html) - For layout self
- [carousel](https://ng-bootstrap.github.io/#/components/carousel/examples) - component from NG bootstrap


### Steps:
- Step1: create new Angular project, run `ng new MultiStepFormSelf` 
- Step2: add required package 
- Step3: use `npm run start` to start this simple project


#### install package
- add bootstrap:
    - run `npm install bootstrap`
- add PrimeNG
    - run `npm install primeng primeicons`
- add ngBootstrap for carousel
    - run `ng add @ng-bootstrap/ng-bootstrap`

### What I learned

<Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.>

1. carousel - NgbCarousel (轮播图)
2. FormBuilder 
3. typescript - Type: 给类型起一个新的名字，也就是别名
4. Angular 元素名：
    - ng-container：“不存在的”标签， 使其可以不借助包装元素（也就是说，可以不用多创建一个div，直接使用ng-container）同时使用 ngFor 和 ngIf 了，并且逻辑层次上也更加清晰。
    
    -- 参考: [ng-container 简介](https://zhuanlan.zhihu.com/p/24781585)
    - ng-template：-- 参考: [指南](https://zhuanlan.zhihu.com/p/415443204)
5. 学到一些新的CSS属性：
    - counter-increment：参考: [W3Cschool](https://www.w3school.com.cn/cssref/pr_gen_counter-increment.asp)
        self: 给指定的选择器增加计数器，这个元素的值，是计数器的名字 

6. 学到一些新的单位/方法：
    - fr: 是一个长度单位，常用在网格布局中；来自单词`fraction`，表示作为剩余空间的一部分，将剩余部分按分配的数字按比例分配，可用来弹性布局
    - vh: 是基于视图窗口的单位，vh:1% 表示视口宽度的1%
    - vw: 是基于视图窗口的单位，vw:1% 表示视口高度的1%
    - dvh: d是dynamic，动态的视口单位
    - rem/em：
    - calc():
    - clamp():
7. CSS网格布局：[网格](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
8. scss:
    - 定义全局变量：
        css只能使用`--`来定义全局变量的，scss可以使用`--`也可以使用`$`来定义全局变量，所以建议`--`来定义。
        参考:  [CSS、SCSS全局变量声明与使用](https://juejin.cn/post/7035929403150303268)
    - @font-face
        ```scss
        @font-face {
            font-family: "Ubuntu";
            font-weight: 500;
            src: url("assets/fonts/ubuntu-medium-webfont.woff2") format("woff2");
        }
        ```
        - format:
            format 属性是帮助浏览器识别字体的。浏览器是不能根据字体 url 后缀去自动识别字体格式的，所以**使用format 属性来帮助浏览器识别字体格式**。
        --- 
        参考：[CSS 引入字体](https://blog.csdn.net/exlinker/article/details/118882128)


## Acknowledgments
- [@simonem-f From gitbhub](https://github.com/simonem-f/FEM-multi-step-form) -  useful reference 
