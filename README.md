# Introduction

<p>This repository contains an example how React and Redux can be used with ASP.NET MVC Core. ReactJS.NET is used to 
be able to use Server Side Rendering. It is a great way to reuse all React Components to create Server Pages.</p>


The purpose of the example is for my own investigation of Visual Studio 2017 and ASP.NET MVC Core. The technologies used include

<ul>
    <li>Just released Visual Studio 2017</li>
    <li>Latest Version of ASP.NET MVC Core 1.1</li>
    <li>React v14.4.0 and Redux v3.6</li>
    <li>ReactJS.NET 3.0 for Server Side Rendering</li>
    <li>Webpack for our builds and bundles</li>
</ul>

# Installion

Clone the repository
<code>git clone https://github.com/dennisfleischmann/dotnet-core-with-react.git</code>

Change directory
<code>cd dotnet-core-with-reacts</code>

Restore all nuget packages
<code>dotnet restore</code>

Install node modules & run builds

<code>cd dotnet-core-with-reacts.ui/client</code>
<code>yarn install</code>

Run builds

<code>yarn build</code>


# Run the Solution

<code>cd..</code>

<code>dotnet run</code>

<code>open http://localhost:5000/</code>
