"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[608],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),y=a,m=g["".concat(l,".").concat(y)]||g[y]||p[y]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4163:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:400},l="Install private packages",u={unversionedId:"tutorial-extras/private-package",id:"tutorial-extras/private-package",isDocsHomePage:!1,title:"Install private packages",description:"Of course, Standard Registry doesn't include private repositories.",source:"@site/docs/tutorial-extras/private-package.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/private-package",permalink:"/docs/tutorial-extras/private-package",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/private-package.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Add Packages to Registry",permalink:"/docs/tutorial-extras/add-registry"},next:{title:"Install",permalink:"/docs/reference/install"}},c=[{value:"inline_registry",id:"inline_registry",children:[],level:3},{value:"local registry",id:"local-registry",children:[],level:3},{value:"github_content",id:"github_content",children:[],level:3}],p={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-private-packages"},"Install private packages"),(0,i.kt)("p",null,"Of course, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")," doesn't include private repositories.\nSo you have to write Registry Configuration by yourself."),(0,i.kt)("p",null,"The environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN")," is required."),(0,i.kt)("p",null,"Please see the Registry Configuration in the Standard Registry."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/v0.10.10/registry.yaml#L1838-L1842"},"https://github.com/aquaproj/aqua-registry/blob/v0.10.10/registry.yaml#L1838-L1842")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: github_release\n  repo_owner: suzuki-shunsuke\n  repo_name: tfcmt\n  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'\n  description: Fork of mercari/tfnotify\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"suzuki-shunsuke/tfcmt")," is actually a public package, but let's assume this is a private package."),(0,i.kt)("p",null,"In that case, you have to write Registry Configuration as the following."),(0,i.kt)("h3",{id:"inline_registry"},"inline_registry"),(0,i.kt)("p",null,"ref. ",(0,i.kt)("a",{parentName:"p",href:"../reference/config#inline_registry"},"inline_registry")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\ninline_registry:\n  packages:\n  - type: github_release\n    repo_owner: suzuki-shunsuke\n    repo_name: tfcmt\n    asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'\n\npackages:\n- name: suzuki-shunsuke/tfcmt\n  registry: inline # inline registry\n")),(0,i.kt)("h3",{id:"local-registry"},"local registry"),(0,i.kt)("p",null,"ref. ",(0,i.kt)("a",{parentName:"p",href:"../reference/config#local-registry"},"local registry")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# registry.yaml\npackages:\n- type: github_release\n  repo_owner: suzuki-shunsuke\n  repo_name: tfcmt\n  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\nregistries:\n- name: foo\n  type: local\n  path: registry.yaml\n\npackages:\n- name: suzuki-shunsuke/tfcmt\n  registry: local # local registry\n")),(0,i.kt)("h3",{id:"github_content"},"github_content"),(0,i.kt)("p",null,"ref. ",(0,i.kt)("a",{parentName:"p",href:"../reference/config#github_content-registry"},"github_content registry")),(0,i.kt)("p",null,"Create a repository for Registry and add Registry Configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# registry.yaml\npackages:\n- type: github_release\n  repo_owner: suzuki-shunsuke\n  repo_name: tfcmt\n  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# aqua.yaml\nregistries:\n- name: foo\n  type: github_content\n  repo_owner: suzuki-shunsuke\n  repo_name: private-aqua-registry # private repository\n  ref: v0.1.0\n  path: registry.yaml\n\npackages:\n- name: suzuki-shunsuke/tfcmt\n  registry: local # local registry\n")))}g.isMDXComponent=!0}}]);