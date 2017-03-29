# Introduction

<p>This repository contains an example how React and Redux can be used with ASP.NET MVC Core. ReactJS.NET is used to 
be able to use Server Side Rendering. It is a great way to reuse all React Components to create Server Pages.</p>


<p>The purpose of the example is for my own investigation of Visual Studio 2017 and ASP.NET MVC Core in connection with React technologies. The following was used for the setup/environment:</p>

<ul>
    <li>Just released Visual Studio 2017</li>
    <li>Latest Version of ASP.NET MVC Core 1.1</li>
    <li>React v15.4.0 and Redux v3.6</li>
    <li>ReactJS.NET 3.0 for Server Side Rendering</li>
    <li>Webpack for our builds and bundles</li>
</ul>

# Installation

<p>Clone the repository</p>
<pre>
<code>git clone https://github.com/dennisfleischmann/dotnet-core-with-react.git</code></pre>

<p>Change directory</p>
<pre>
<code>cd dotnet-core-with-reacts</code></pre>

<p>Restore all nuget packages</p>
<pre>
<code>dotnet restore</code></pre>

<p>Install node modules & run builds</p>
<pre>
<code>cd dotnet-core-with-reacts.ui/client</code></pre>

<p>Install node modules</p>
<pre>
<code>yarn install</code></pre>

<p>Run builds</p>
<pre>
<code>yarn build</code></pre>


# Output


![alt tag](https://github.com/dennisfleischmann/dotnet-core-with-react/blob/master/.github/Capture.PNG)


# Run the Solution

<pre>
<code>cd..</code></pre>
<pre>
<code>dotnet run</code></pre>
<pre>
<code>open http://localhost:5000/</code></pre>


