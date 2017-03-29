# Introduction

<p>This repository contains an example how React and Redux can be used with ASP.NET MVC Core. ReactJS.NET is used to 
be able to use Server Side Rendering. It is a great way to reuse all React Components to create Server Pages.</p>


<p>The purpose of the example is for my own investigation of Visual Studio 2017 and ASP.NET MVC Core. The technologies used include</p>

<ul>
    <li>Just released Visual Studio 2017</li>
    <li>Latest Version of ASP.NET MVC Core 1.1</li>
    <li>React v14.4.0 and Redux v3.6</li>
    <li>ReactJS.NET 3.0 for Server Side Rendering</li>
    <li>Webpack for our builds and bundles</li>
</ul>

# Installion

<p>Clone the repository</p>
<code>git clone https://github.com/dennisfleischmann/dotnet-core-with-react.git</code>

<p>Change directory</p>
<code>cd dotnet-core-with-reacts</code>

<p>Restore all nuget packages</p>
<code>dotnet restore</code>

<p>Install node modules & run builds</p>
<code>cd dotnet-core-with-reacts.ui/client</code>

<p>Install node modules</p>
<code>yarn install</code>

<p>Run builds</p>
<code>yarn build</code>


# Output

# Run the Solution

<code>cd..</code>

<code>dotnet run</code>

<code>open http://localhost:5000/</code>




![alt tag](https://github.com/dennisfleischmann/dotnet-core-with-react/blob/master/.github/Capture.PNG)
