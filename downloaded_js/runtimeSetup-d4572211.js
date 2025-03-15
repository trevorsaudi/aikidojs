function p(a,o){switch(a){case"js":case"ts":return[{value:"npm",label:"npm",snippet:i.npm},{value:"pnpm",label:"pnpm",snippet:i.pnpm},{value:"yarn",label:"yarn",snippet:i.yarn}];case"py":return[{value:"pip",label:"pip",snippet:i.pip},{value:"poetry",label:"poetry",snippet:i.poetry}];case"java":{const r=o.find(n=>n.runtime==="java"),s=r?r.version:"1.0.0";return[{value:"zip",label:"Download ZIP File with Agent",snippet:i.java_zip.replace(/<VERSION>/g,s)}]}case"php":{const r=o.find(n=>n.runtime==="php"),s=r?r.version:"1.0.86";return[{value:"rpm",label:"RHEL, CentOS and Fedora",snippet:i.rpm.replace(/<VERSION>/g,s)},{value:"deb",label:"Debian and Ubuntu",snippet:i.deb.replace(/<VERSION>/g,s)},{value:"beanstalk",label:"AWS Elastic Beanstalk",snippet:e.php_beanstalk.replace(/<VERSION>/g,s)},{value:"forge_recipe",label:"Forge (recipe)",snippet:e.php_forge_recipe.replace(/<VERSION>/g,s)},{value:"forge_ssh",label:"Forge (ssh)",snippet:e.php_forge_ssh.replace(/<VERSION>/g,s)},{value:"flyio",label:"Fly.io (flyctl)",snippet:e.php_flyio.replace(/<VERSION>/g,s)}]}case"csharp":{const r=o.find(n=>n.runtime==="csharp"),s=r?r.version:"1.0.0";return[{value:"core",label:".NET Core",snippet:i.dotnet_core.replace(/<VERSION>/g,s)},{value:"framework",label:".NET Framework",snippet:i.dotnet_framework.replace(/<VERSION>/g,s)}]}default:return[]}}function l(a,o){switch(o){case"js":case"ts":return[{value:"npm",label:"npm",snippet:t.npm.replace("<VERSION>",a)},{value:"pnpm",label:"pnpm",snippet:t.pnpm.replace("<VERSION>",a)},{value:"yarn",label:"yarn",snippet:t.yarn.replace("<VERSION>",a)}];case"py":return[{value:"pip",label:"pip",snippet:t.pip.replace("<VERSION>",a)},{value:"poetry",label:"poetry",snippet:t.poetry.replace("<VERSION>",a)}];case"java":return[{value:"zip",label:"ZIP File",snippet:t.java_zip.replace(/<VERSION>/g,a)}];case"php":return[{value:"rpm",label:"RHEL, CentOS and Fedora",snippet:t.rpm.replace(/<VERSION>/g,a)},{value:"deb",label:"Debian and Ubuntu",snippet:t.deb.replace(/<VERSION>/g,a)},{value:"beanstalk",label:"AWS Elastic Beanstalk",snippet:e.php_beanstalk.replace(/<VERSION>/g,a)},{value:"forge_recipe",label:"Forge (recipe)",snippet:e.php_forge_recipe.replace(/<VERSION>/g,a)},{value:"forge_ssh",label:"Forge (ssh)",snippet:e.php_forge_ssh.replace(/<VERSION>/g,a)},{value:"flyio",label:"Fly.io (flyctl)",snippet:e.php_flyio.replace(/<VERSION>/g,a)}];case"csharp":return[{value:"core",label:"NuGet (.NET Core)",snippet:t.dotnet_core.replace(/<VERSION>/g,a)},{value:"framework",label:"NuGet (.NET Framework)",snippet:t.dotnet_framework.replace(/<VERSION>/g,a)}]}}function d(){return[{value:"js",label:"JavaScript",github:"https://github.com/AikidoSec/firewall-node",changelog:"https://github.com/AikidoSec/firewall-node/releases",package:"https://www.npmjs.com/package/@aikidosec/firewall",packageService:"npm",packageIcon:"npm.svg"},{value:"ts",label:"TypeScript",github:"https://github.com/AikidoSec/firewall-node",changelog:"https://github.com/AikidoSec/firewall-node/releases",package:"https://www.npmjs.com/package/@aikidosec/firewall",packageService:"npm",packageIcon:"npm.svg"},{value:"py",label:"Python",github:"https://github.com/AikidoSec/firewall-python",changelog:"https://github.com/AikidoSec/firewall-python/releases",package:"https://pypi.org/project/aikido_zen/",packageService:"PyPI",packageIcon:"pypi.svg"},{value:"php",label:"PHP",github:"https://github.com/AikidoSec/firewall-php",changelog:"https://github.com/AikidoSec/firewall-php/releases",package:"https://github.com/AikidoSec/firewall-php",packageService:"GitHub",packageIcon:"github.svg"},{value:"java",label:"Java",github:"https://github.com/AikidoSec/firewall-java",changelog:"https://github.com/AikidoSec/firewall-java/releases",package:"https://github.com/AikidoSec/firewall-java",packageService:"GitHub",packageIcon:"github.svg"},{value:"csharp",label:"C#",github:"https://github.com/AikidoSec/firewall-dotnet",changelog:"https://github.com/AikidoSec/firewall-dotnet/releases",package:"https://www.nuget.org/profiles/AikidoSecurity",packageService:"NuGet",packageIcon:"nuget.svg"}]}function c(a){switch(a){case"js":return[{value:"express",label:"Express",snippet:e.js_express},{value:"fastify",label:"Fastify",snippet:e.js_fastify},{value:"hapi",label:"Hapi",snippet:e.js_hapi},{value:"lambda",label:"Lambda",snippet:e.js_lambda},{value:"gcf",label:"Google Cloud Functions",snippet:e.js_gcf},{value:"pubsub",label:"Google Cloud Pub/Sub",snippet:e.js_pubsub},{value:"hono",label:"Hono",snippet:e.js_hono},{value:"nestjs",label:"NestJS",snippet:e.js_nestjs}];case"ts":return[{value:"express",label:"Express",snippet:e.ts_express},{value:"fastify",label:"Fastify",snippet:e.ts_fastify},{value:"hapi",label:"Hapi",snippet:e.ts_hapi},{value:"lambda",label:"Lambda",snippet:e.ts_lambda},{value:"gcf",label:"Google Cloud Functions",snippet:e.ts_gcf},{value:"pubsub",label:"Google Cloud Pub/Sub",snippet:e.ts_pubsub},{value:"hono",label:"Hono",snippet:e.ts_hono},{value:"nestjs",label:"NestJS",snippet:e.ts_nestjs}];case"py":return[{value:"flask",label:"Flask",snippet:e.py_flask},{value:"django",label:"Django",snippet:e.py_django},{value:"starlette",label:"Starlette",snippet:e.py_starlette},{value:"quart",label:"Quart",snippet:e.py_quart},{value:"fastapi",label:"FastAPI",snippet:e.py_fastapi},{value:"gunicorn_flask",label:"gUnicorn + Flask",snippet:e.py_gunicorn},{value:"gunicorn_django",label:"gUnicorn + Django",snippet:e.py_gunicorn},{value:"gunicorn_starlette",label:"gUnicorn + Starlette",snippet:e.py_gunicorn},{value:"gunicorn_quart",label:"gUnicorn + Quart",snippet:e.py_gunicorn},{value:"gunicorn_fastapi",label:"gUnicorn + FastAPI",snippet:e.py_gunicorn}];case"php":case"java":return[];case"csharp":return[{value:"core",label:".NET Core",snippet:e.dotnet_core},{value:"framework",label:".NET Framework",snippet:e.dotnet_framework_global},{value:"framework_owin",label:".NET Framework (OWIN)",snippet:e.dotnet_framework_global_owin}]}}function u(a){switch(a){case"js":return[{value:"express",label:"Express",snippet:e.js_express_middleware},{value:"fastify",label:"Fastify",snippet:e.js_fastify_middleware},{value:"hapi",label:"Hapi",snippet:e.js_hapi_middleware},{value:"hono",label:"Hono",snippet:e.js_hono_middleware},{value:"nestjs",label:"NestJS",snippet:e.js_nestjs_middleware}];case"ts":return[{value:"express",label:"Express",snippet:e.ts_express_middleware},{value:"fastify",label:"Fastify",snippet:e.ts_fastify_middleware},{value:"hapi",label:"Hapi",snippet:e.ts_hapi_middleware},{value:"hono",label:"Hono",snippet:e.ts_hono_middleware},{value:"nestjs",label:"NestJS",snippet:e.ts_nestjs_middleware}];case"py":return[{value:"flask",label:"Flask",snippet:e.py_flask_middleware},{value:"django",label:"Django",snippet:e.py_django_middleware},{value:"quart",label:"Quart",snippet:e.py_quart_middleware},{value:"starlette",label:"Starlette",snippet:e.py_starlette_middleware},{value:"fastapi",label:"Fastapi",snippet:e.py_fastapi_middleware}];case"php":return[{value:"Laravel",label:"Laravel",snippet:e.php_laravel_middleware},{value:"vanilla",label:"No framework",snippet:e.php_vanilla_middleware}];case"java":return[{value:"spring_mvc",label:"Spring MVC",snippet:e.java_spring_mvc_middleware},{value:"javalin",label:"Javalin",snippet:e.java_javalin_middleware},{value:"spring_webflux",label:"Spring Webflux",snippet:e.java_spring_webflux_middleware}];case"csharp":return[{value:"core",label:".NET Core",snippet:e.dotnet_core_middleware},{value:"framework",label:".NET Framework",snippet:e.dotnet_framework_middleware},{value:"framework_owin",label:".NET Framework (OWIN)",snippet:e.dotnet_framework_middleware_owin}]}}const i={npm:"npm install @aikidosec/firewall",pnpm:"pnpm add @aikidosec/firewall",yarn:"yarn add @aikidosec/firewall",pip:"pip install aikido_zen",poetry:"poetry add aikido_zen",rpm:"rpm -Uvh --oldpackage https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.rpm",deb:"curl -L -O https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.deb && dpkg -i -E ./aikido-php-firewall.x86_64.deb",java_zip:`curl -L -O https://github.com/AikidoSec/firewall-java/releases/download/v<VERSION>/zen.zip && unzip zen.zip
# Now add this to your java command: -javaagent:./zen/agent.jar`,dotnet_core:"dotnet add package Aikido.Zen.DotNetCore --version <VERSION>",dotnet_framework:"dotnet add package Aikido.Zen.DotNetFramework --version <VERSION>"},t={npm:"npm install @aikidosec/firewall@<VERSION>",pnpm:"pnpm add @aikidosec/firewall@<VERSION>",yarn:"yarn add @aikidosec/firewall@<VERSION>",pip:"pip install aikido_zen==<VERSION>",poetry:"poetry add aikido_zen==<VERSION>",rpm:"rpm -Uvh --oldpackage https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.rpm",deb:"curl -L -O https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.deb && dpkg -i -E ./aikido-php-firewall.x86_64.deb",java_zip:"curl -L -O https://github.com/AikidoSec/firewall-java/releases/download/v<VERSION>/zen.zip && unzip zen.zip",dotnet_core:"dotnet add package Aikido.Zen.DotNetCore --version <VERSION>",dotnet_framework:"dotnet add package Aikido.Zen.DotNetFramework --version <VERSION>"},e={js_express:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const express = require('express');

const app = express();

// ...
`,js_express_middleware:`
// Include this before any other code or imports
<span class="diffs_green">const Zen = require('@aikidosec/firewall');</span>

const express = require('express');

const app = express();

app.use((req, res, next) => {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  next();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addExpressMiddleware(app);</span>

// ...
`,ts_express:`
// Include this before any other code or imports
<span class="diffs_green">import '@aikidosec/firewall';</span>

import express from 'express';

const app = express();

// ...
`,ts_express_middleware:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import express from 'express';

const app = express();

app.use((req, res, next) => {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  next();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addExpressMiddleware(app);</span>

// ...
`,js_lambda:`
// Include this before any other code or imports
<span class="diffs_green">const protect = require('@aikidosec/firewall/lambda');</span>

// Wrap your handler with protect
exports.handler = <span class="diffs_green">protect(</span>async (event, context) => {
  // ...
}<span class="diffs_green">)</span>;
`,ts_lambda:`
// Include this before any other code or imports
<span class="diffs_green">import protect from "@aikidosec/firewall/lambda";</span>

// Wrap your handler with protect
export const handler = <span class="diffs_green">protect(</span>async (event, context) => {
  // ...
}<span class="diffs_green">)</span>;
`,js_gcf:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall/cloud-function');</span>

const functions = require('@google-cloud/functions-framework');

functions.http('handler', async (req, res) => {
  // ...
});
`,ts_gcf:`
// Include this before any other code or imports
<span class="diffs_green">import '@aikidosec/firewall/cloud-function';</span>

import * as functions from '@google-cloud/functions-framework';

functions.http('handler', async (req, res) => {
  // ...
});
`,js_pubsub:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const { PubSub } = require('@google-cloud/pubsub');

const client = new PubSub();
const topic = client.createTopic('my-topic');
const subscription = topic.createSubscription('my-subscription');

subscription.on('message', (message) => {
  console.log('Received message:', message.data.toString());
  message.ack();
});
`,ts_pubsub:`
// Include this before any other code or imports
<span class="diffs_green">import '@aikidosec/firewall';</span>

import { PubSub } from '@google-cloud/pubsub';

const client = new PubSub();
const topic = client.createTopic('my-topic');
const subscription = topic.createSubscription('my-subscription');

subscription.on('message', (message) => {
  console.log('Received message:', message.data.toString());
  message.ack();
}
`,js_hono:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const { Hono } = require('hono');

const app = new Hono();

// ...
`,js_hono_middleware:`
// Include this before any other code or imports
<span class="diffs_green">const Zen = require('@aikidosec/firewall');</span>

const { Hono } = require('hono');

const app = new Hono();

app.use(async (c, next) => {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  await next();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addHonoMiddleware(app);</span>

// ...
`,ts_hono:`
// Include this before any other code or imports
<span class="diffs_green">import '@aikidosec/firewall';</span>

import { Hono } from 'hono';

const app = new Hono();

// ...
`,ts_hono_middleware:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import { Hono } from 'hono';

const app = new Hono();

app.use(async (c, next) => {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  await next();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addHonoMiddleware(app);</span>

// ...
`,js_fastify:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const fastify = require('fastify');
const fastify = fastify();

// ...
`,js_fastify_middleware:`
// Include this before any other code or imports
<span class="diffs_green">const Zen = require('@aikidosec/firewall');</span>

const fastify = require('fastify');
const fastify = fastify();

fastify.addHook('onRequest', (request, reply, done) => {
  // Get the user from the request

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  done();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addFastifyHook(fastify);</span>

// ...
`,ts_fastify:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import fastify from 'fastify';
const fastify = fastify();

// ...
`,ts_fastify_middleware:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import fastify from 'fastify';
const fastify = fastify();

fastify.addHook('onRequest', (request, reply, done) => {
  // Get the user from the request

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  done();
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addFastifyHook(fastify);</span>

// ...
`,js_hapi:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const Hapi = require("@hapi/hapi");

const server = Hapi.server(...);

// ...
`,js_hapi_middleware:`
// Include this before any other code or imports
<span class="diffs_green">const Zen = require('@aikidosec/firewall');</span>

const Hapi = require("@hapi/hapi");
const server = Hapi.server(...);

server.ext('onRequest', function (request, h) {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  return h.continue;
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addHapiMiddleware(server);</span>

// ...
`,ts_hapi:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import Hapi from "@hapi/hapi";

const server = Hapi.server(...);

// ...
`,ts_hapi_middleware:`
// Include this before any other code or imports
<span class="diffs_green">import Zen from '@aikidosec/firewall';</span>

import Hapi from "@hapi/hapi";
const server = Hapi.server(...);

server.ext('onRequest', function (request, h) {
  // Get the user from your authentication middleware

  <span class="diffs_green">// Optional, if you want to use user based rate limiting or block specific users
  Zen.setUser({
    id: "123",
    // Passing a name is optional
    name: "John Doe",
  });</span>

  return h.continue;
});

// Place this middleware after your authentication middleware
// As early as possible in the middleware chain
<span class="diffs_green">Zen.addHapiMiddleware(server);</span>

// ...
`,js_nestjs:`
// Include this before any other code or imports
<span class="diffs_green">require('@aikidosec/firewall');</span>

const { NestFactory } = require('@nestjs/core');
// ...

async function bootstrap() {
  // ...
}

bootstrap();
`,js_nestjs_middleware:[`
<span class="text--bold">src/main.js</span>
const app = await NestFactory.create(AppModule);
<span class="diffs_green">app.useGlobalGuards(new ZenGuard());</span>

// ...
`,`
<span class="text--bold">src/zen.guard.js</span>
<span class="diffs_green">const { Injectable, HttpException, HttpStatus } = require("@nestjs/common");
const Zen = require("@aikidosec/firewall");

@Injectable()
class ZenGuard {
  canActivate() {
    // Optional, if you want to use user based rate limiting or block specific users
    Zen.setUser({
      id: "123",
      // Passing a name is optional
      name: "John Doe",
    });

    const result = Zen.shouldBlockRequest();

    if (result.block) {
      if (result.type === "ratelimited") {
        let message = "You are rate limited by Zen.";
        if (result.trigger === "ip" && result.ip) {
          message += \` (Your IP: \${result.ip})\`;
        }

        throw new HttpException(message, HttpStatus.TOO_MANY_REQUESTS);
      }

      if (result.type === "blocked") {
        throw new HttpException(
          "You are blocked by Zen.",
          HttpStatus.FORBIDDEN
        );
      }
    }

    return true;
  }
}

module.exports = ZenGuard;</span>
`],ts_nestjs:`
// Include this before any other code or imports
<span class="diffs_green">import '@aikidosec/firewall';</span>

import { NestFactory } from '@nestjs/core';
// ...

async function bootstrap() {
  // ...
}

bootstrap();
`,ts_nestjs_middleware:[`
<span class="text--bold">src/main.ts</span>
const app = await NestFactory.create(AppModule);
<span class="diffs_green">app.useGlobalGuards(new ZenGuard());</span>

// ...
`,`
<span class="text--bold">src/zen.guard.ts</span>
<span class="diffs_green">import {
  Injectable,
  CanActivate,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { shouldBlockRequest, setUser } from "@aikidosec/firewall";

@Injectable()
export class ZenGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    // Optional, if you want to use user based rate limiting or block specific users
    setUser({
      id: "123",
      // Passing a name is optional
      name: "John Doe",
    });

    const result = shouldBlockRequest();

    if (result.block) {
      if (result.type === "ratelimited") {
        let message = "You are rate limited by Zen.";
        if (result.trigger === "ip" && result.ip) {
          message += \` (Your IP: \${result.ip})\`;
        }

        throw new HttpException(message, HttpStatus.TOO_MANY_REQUESTS);
      }

      if (result.type === "blocked") {
        throw new HttpException(
          "You are blocked by Zen.",
          HttpStatus.FORBIDDEN
        );
      }
    }

    return true;
  }
}</span>
`],py_flask:`
# Include this before any other code or imports in your app.py file
<span class="diffs_green">import aikido_zen
aikido_zen.protect()</span>
`,py_flask_middleware:`
import aikido_zen
aikido_zen.protect()
from flask import Flask
<span class="diffs_green">from aikido_zen.middleware import AikidoFlaskMiddleware</span>

app = Flask(__name__)

# Add middleware in here that requires ratelimiting :
app.wsgi_app = YourSensitiveMiddleware(app.wsgi_app)

<span class="diffs_green">app.wsgi_app = AikidoFlaskMiddleware(app.wsgi_app)</span>

class AuthorizationMiddleware:
	def __init__(self, app):
		self.app = app
	def __call__(self, environ, start_response):
		# Do Authorization here

		# Set user (for user based ratelimiting), name is optional: 
		<span class="diffs_green">aikido_zen.set_user({"id": "123", "name": "John Doe"})</span>
		return self.app(environ, start_response)

app.wsgi_app = AuthorizationMiddleware(app.wsgi_app)
`,py_django:`
# Include this before any other code or imports in your manage.py file
<span class="diffs_green">import aikido_zen
aikido_zen.protect()</span>
`,py_django_middleware:`
<span class="text--bold">settings.py</span>

MIDDLEWARE = [
	# Authorization middleware here (Make sure our middleware runs after this)
	"sampleapp.middleware.authorization"
	# ...
<span class="diffs_green">    "aikido_zen.middleware.AikidoDjangoMiddleware",</span>
    # ...
]

# In your Authorization middleware, you can set the user (name is optional): 
<span class="diffs_green">set_user({"id": "123", "name": "John Doe"})</span>
`,py_quart:`
# Include this before any other code or imports in your app.py file
<span class="diffs_green">import aikido_zen
aikido_zen.protect()</span>
`,py_quart_middleware:`
import aikido_zen
aikido_zen.protect()
from quart import Quart
<span class="diffs_green">from aikido_zen.middleware import AikidoQuartMiddleware</span>

app = Quart(__name__)

# Add middleware in here that requires ratelimiting :
app.asgi_app = YourSensitiveMiddleware(app.asgi_app)

<span class="diffs_green">app.asgi_app = AikidoQuartMiddleware(app.asgi_app)</span>

class AuthorizationMiddleware:
	def __init__(self, app):
		self.app = app
	async def __call__(self, scope, receive, send):
		# Do Authorization here

		# Set user (for user based ratelimiting), name is optional: 
		<span class="diffs_green">aikido_zen.set_user({"id": "123", "name": "John Doe"})</span>
		return await self.app(scope, receive, send)

app.asgi_app = AuthorizationMiddleware(app.asgi_app)
`,py_gunicorn:[`
# Use the following template for your gunicorn_config.py file
<span class="diffs_green">import aikido_zen.decorators.gunicorn as aik

@aik.post_fork
def post_fork(server, worker):
	# If you already have a config file, replace pass with your own code.
	pass
</span>`,`
# And make sure to include this config in your gunicorn command
$ gunicorn <span class="diffs_green">-c gunicorn_config.py</span> --workers ...
`],py_starlette:`
# Include this before any other code or imports in your app.py file
<span class="diffs_green">import aikido_zen
aikido_zen.protect()</span>
`,py_fastapi:`
# Include this before any other code or imports in your app.py file
<span class="diffs_green">import aikido_zen
aikido_zen.protect()</span>
`,py_starlette_middleware:`
import aikido_zen
aikido_zen.protect()
from starlette.applications import Starlette
<span class="diffs_green">from starlette.middleware import Middleware</span>
<span class="diffs_green">from aikido_zen.middleware import AikidoStarletteMiddleware</span>

class AuthorizationMiddleware:
	def __init__(self, app):
		self.app = app
	async def __call__(self, scope, receive, send):
		# Do Authorization here

		# Set user (for user based ratelimiting), name is optional: 
		<span class="diffs_green">aikido_zen.set_user({"id": "123", "name": "John Doe"})</span>
		return await self.app(scope, receive, send)

# ...

app = Starlette(routes=routes, middleware=[
	Middleware(AuthorizationMiddleware),
<span class="diffs_green">	Middleware(AikidoStarletteMiddleware),</span>
	Middleware(YourSensitiveMiddleware)
])
`,py_fastapi_middleware:`
import aikido_zen
aikido_zen.protect()

from fastapi import FastAPI
<span class="diffs_green">from aikido_zen.middleware import AikidoFastAPIMiddleware</span>
app = FastAPI()

class AuthorizationMiddleware:
	def __init__(self, app):
		self.app = app
	async def __call__(self, scope, receive, send):
		# Do Authorization here

		# Set user (for user based ratelimiting), name is optional: 
		<span class="diffs_green">aikido_zen.set_user({"id": "123", "name": "John Doe"})</span>
		return await self.app(scope, receive, send)

# Setting a user, this is optional but required for user-blocking or rate-limiting by user not IP : 
<span class="diffs_green">app.add_middleware(AuthorizationMiddleware)</span>
<span class="diffs_green">app.add_middleware(AikidoFastAPIMiddleware)</span>
`,php_beanstalk:`
# Create a file named .ebextensions/01_aikido_php_firewall.config with the following content:
commands:
  aikido-php-firewall:
    command: "rpm -Uvh --oldpackage https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.rpm"
    ignoreErrors: true

files:
  "/opt/elasticbeanstalk/tasks/bundlelogs.d/aikido-php-firewall.conf":
    mode: "000755"
    owner: root
    group: root
    content: |
      /var/log/aikido-*/*.log

  "/opt/elasticbeanstalk/tasks/taillogs.d/aikido-php-firewall.conf":
    mode: "000755"
    owner: root
    group: root
    content: |
      /var/log/aikido-*/*.log
`,php_forge_recipe:`
# Go to "Recipes".
# Based on the running OS, use the manual installation commands to create a new recipe called "Install Aikido Firewall" and select "root" as user.
# Example for Debian-based systems:
cd /tmp

# Install commands from the manual installation sections below, based on your OS:
curl -L -O https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.deb
dpkg -i -E ./aikido-php-firewall.x86_64.deb

# Restarting the php services in order to load the Aikido PHP Firewall
systemctl list-units | grep php | awk '{print $1}' | while read service; do
    sudo systemctl restart "$service"
done

# Run the created recipe.
`,php_forge_ssh:`
# Ssh into your server and run the manual installation steps for your OS
# Example for Debian-based servers:
cd /tmp

# Install commands from the manual installation sections below, based on your OS:
curl -L -O https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.deb
sudo dpkg -i -E ./aikido-php-firewall.x86_64.deb

# Go to "[server_name] -> [site_name] -> Restart" and click "Restart PHP <version>".
`,php_flyio:`
# Run 'fly launch'
# Run 'fly secrets set AIKIDO_TOKEN=AIK_RUNTIME...'
# Create .fly/scripts/aikido.sh and add the install commands from the manual installation sections, based on your OS:

#!/usr/bin/env bash
cd /tmp
curl -L -O https://github.com/AikidoSec/firewall-php/releases/download/v<VERSION>/aikido-php-firewall.x86_64.deb
dpkg -i -E ./aikido-php-firewall.x86_64.deb

# Run 'fly deploy'
`,php_laravel_middleware:[`
<span class="text--bold">bootstrap/app.php</span>
->withMiddleware(function (Middleware $middleware) {
  <span class="diffs_green">$middleware->append(AikidoMiddleware::class);</span>
})
`,`
<span class="text--bold">app/Http/Middleware/AikidoMiddleware.php</span>
<span class="diffs_green">&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Support\\Facades\\Auth;

final class AikidoMiddleware
{
  public function handle($request, Closure $next)
  {
    // Check if extension is loaded
    if (!extension_loaded('aikido')) {
      return $next($request);
    }

    // Get the authenticated user's ID
    $userId = Auth::id();

    if ($userId) {
      \\aikido\\set_user($userId);
    }

    $decision = \\aikido\\should_block_request();

    if ($decision->block) {
      if ($decision->type == 'blocked') {
        if ($decision->trigger == 'user') {
          return response('Your user is blocked!', 403);
        }
        else if ($decision->trigger == 'ip') {
          return response("Your IP ({$decision->ip}) is blocked due to: {$decision->description}!", 403);
        }
      }
      else if ($decision->type == 'ratelimited') {
        if ($decision->trigger == 'user') {
          return response('Your user exceeded the rate limit for this endpoint!', 429);
        }
        else if ($decision->trigger == 'ip') {
          return response(
            "Your IP ({$decision->ip}) exceeded the rate limit for this endpoint!",
            429
          );
        }
      }
    }

    return $next($request);
  }
}</span>
`],php_vanilla_middleware:`
<span class="diffs_green">&lt;?php

namespace App\\Middleware;

use Psr\\Http\\Message\\ResponseInterface;
use Psr\\Http\\Message\\ServerRequestInterface;
use Psr\\Http\\Server\\MiddlewareInterface;
use Psr\\Http\\Server\\RequestHandlerInterface;
use Laminas\\Diactoros\\Response; // Or use any other PSR Response implementation

class AikidoMiddleware implements MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        // Start the session (if needed) to track user login status
        session_start();

        // Check if Aikido extension is loaded
        if (!extension_loaded('aikido')) {
            // Extension not loaded
            // Pass the request to the next middleware or request handler
            return $handler->handle($request);
        }

        // Get the user ID (from session or other auth system)
        $userId = $this->getAuthenticatedUserId();
        
        // If the user is authenticated, set the user ID in Aikido Zen context
        if ($userId) {
            \\aikido\\set_user($userId);
        }

        // Check blocking decision from Aikido
        $decision = \\aikido\\should_block_request();

        if (!$decision->block) {
            // Aikido decided not to block
            // Pass the request to the next middleware or request handler
            return $handler->handle($request);
        }

        if ($decision->type == "blocked") {
            // If the user/ip is blocked, return a 403 status code
            $message = "";
            if ($decision->trigger == "user") {
                $message = "Your user is blocked!";
            }
            else if ($decision->trigger == "ip") {
                $message = "Your IP ({$decision->ip}) is blocked due to: {$decision->description}!";
            }

            return new Response([
                'message' => $message,
            ], 403);
        }
        else if ($decision->type == "ratelimited") {
            // If the rate limit is exceeded, return a 429 status code
            $message = "";
            if ($decision->trigger == "user") {
                $message = "Your user exceeded the rate limit for this endpoint!";
            }
            else if ($decision->trigger == "ip") {
                $message = "Your IP ({$decision->ip}) exceeded the rate limit for this endpoint!";
            }
            return new Response([
                'message' => $message,
            ], 429);
        }

        // Aikido decided to block but decision type is not implemented
        return new Response([
            'message' => 'Something went wrong!',
        ], 500);
    }

    // Example function to simulate user authentication
    private function getAuthenticatedUserId(): ?int
    {
        return $_SESSION['user_id'] ?? null;
    }
}</span>
`,java_spring_mvc_middleware:`
@Component
@Order(2)
public class RateLimitingFilter implements Filter {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
		// Setting a user : 
		setUser(new SetUser.UserObject("123", "John Doe"));
		
        ShouldBlockRequest.ShouldBlockRequestResult shouldBlockRequestResult = ShouldBlockRequest.shouldBlockRequest();
        if (shouldBlockRequestResult.block()) {
            if (shouldBlockRequestResult.data().type().equals("ratelimited")) {
                String message = "You are rate limited by Zen.";
                if (shouldBlockRequestResult.data().trigger().equals("ip")) {
                    message = message + " (Your IP: " + shouldBlockRequestResult.data().ip() + ")";
                }
                setResponse(response, message, 429);
            } else if (shouldBlockRequestResult.data().type().equals("blocked")) {
                setResponse(response, "You are blocked by Zen.", 403);
            }
            return;
        }
        chain.doFilter(request, response);
    }
    private static void setResponse(ServletResponse response, String text, int statusCode) throws IOException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setStatus(statusCode);
        httpResponse.setContentType("text/plain");
        PrintWriter writer = httpResponse.getWriter();
        writer.write(text);
        writer.flush();
    }
}
	`,java_javalin_middleware:`
import dev.aikido.agent_api.middleware.AikidoJavalinMiddleware;
import dev.aikido.agent_api.SetUser; // (optional)
import static dev.aikido.agent_api.SetUser.setUser; // (optional)
// ...

// Set a user in middleware (optional) : 
app.before(ctx -> {
	setUser(new SetUser.UserObject("<ID-HERE>", "John Doe"));
});

// Run our default rate-limiting/blocking middleware : 
app.before(new AikidoJavalinMiddleware());
`,java_spring_webflux_middleware:`
import dev.aikido.agent_api.middleware.AikidoJavalinMiddleware;
import dev.aikido.agent_api.SetUser; // (optional)
import static dev.aikido.agent_api.SetUser.setUser; // (optional)
// ...

@Component
public class RatelimitingFilter implements WebFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain webFilterChain) {
        // Setting a user (optional), you can also set a user in another filter :
        setUser(new SetUser.UserObject("<ID-HERE>", "John Doe"));

        // Check with Aikido if this request needs to be blocked
        ShouldBlockRequest.ShouldBlockRequestResult shouldBlockRequestResult = ShouldBlockRequest.shouldBlockRequest();
        if (shouldBlockRequestResult.block()) {
            exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
            byte[] response = null;

            // Aikido Zen returns the specific reason why a request was blocked
            // Use this to show meaningful error messages to your users
            if (shouldBlockRequestResult.data().type().equals("ratelimited")) {
                String message = "You are rate limited by Zen.";
                if (shouldBlockRequestResult.data().trigger().equals("ip")) {
                    message = message + " (Your IP: " + shouldBlockRequestResult.data().ip() + ")";
                }
                exchange.getResponse().setStatusCode(HttpStatus.TOO_MANY_REQUESTS); // 429
                response = message.getBytes(StandardCharsets.UTF_8);
            } else if (shouldBlockRequestResult.data().type().equals("blocked")) {
                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN); // 403
                response = "You are blocked by Zen.".getBytes(StandardCharsets.UTF_8);
            }

            DataBufferFactory dataBufferFactory = exchange.getResponse().bufferFactory();
            DataBuffer dataBuffer = dataBufferFactory.wrap(response);
            return exchange.getResponse().writeWith(Mono.just(dataBuffer));
        }

        return webFilterChain.filter(exchange);
    }
}
`,dotnet_core:`
<span class="diffs_green">using Aikido.Zen.DotNetCore;
using Microsoft.AspNetCore.HttpOverrides;</span>

// Startup.cs
public void ConfigureServices(IServiceCollection services)
{
    // other services
    <span class="diffs_green">services.AddZenFirewall(Configuration);</span>
    // other services
}

public void Configure(IApplicationBuilder app)
{
    // Make sure to allow x-forwarded-for header if your app is behind a proxy
    <span class="diffs_green">app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
    });</span>

    // other middleware

    // place this after .UseRouting(), or after authorization,
    // but high enough in the pipeline to catch all requests
    <span class="diffs_green">app.UseZenFirewall();</span>

    // other middleware
}
`,dotnet_core_middleware:`
<span class="diffs_green">using Aikido.Zen.DotNetCore;
using Microsoft.AspNetCore.HttpOverrides;</span>

// Program.cs
var app = builder.Build();
app
    // Make sure to allow x-forwarded-for header if your app is behind a proxy
    <span class="diffs_green">.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
    })</span>
    // add routing
    .UseRouting()
    // authorize users
    .Use((context, next) =>
    {
        var id = context.User?.Identity?.GetUserId() ?? "test";
        var name = context.User?.Identity?.Name ?? "Anonymous";
        if (!string.IsNullOrEmpty(id))
            <span class="diffs_green">Zen.SetUser(id, name, context);</span>
        return next();
    })
    // add Zen middleware
    <span class="diffs_green">.UseZenFirewall()</span>
`,dotnet_framework_global:`
<span class="diffs_green">using Aikido.Zen.DotNetFramework;</span>

// Global.asax.cs
protected void Application_Start()
{
    // other code
    <span class="diffs_green">Zen.Start();</span>
}
`,dotnet_framework_global_owin:`
<span class="diffs_green">using Aikido.Zen.DotNetFramework;</span>

// Startup.cs
public void Configuration(IAppBuilder app)
{
    // other code
    <span class="diffs_green">Zen.Start();</span>
}
`,dotnet_framework_middleware:`
<span class="diffs_green">using Aikido.Zen.DotNetFramework;
using Aikido.Zen.Core.Models;</span>

// Global.asax.cs
public void Application_Start()
{
    // other code
    <span class="diffs_green">Zen.SetUser(context => new User(context.User.Identity.GetUserId(), context.User.Identity.Name));</span>
    Zen.Start();
}
`,dotnet_framework_middleware_owin:`
<span class="diffs_green">using Aikido.Zen.DotNetFramework;
using Aikido.Zen.Core.Models;</span>

// Startup.cs
public void Configuration(IAppBuilder app)
{
	// other code
	<span class="diffs_green">Zen.SetUser(
		context => new User(
			context.Authentication.User.Identity.Id,
			context.Authentication.User.Identity.Name
		)
	);</span>
	Zen.Start();
}
`};export{p as a,c as b,l as c,u as d,d as g};
